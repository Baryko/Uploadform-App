/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, PropsWithChildren, useContext } from 'react';
import { collection, query, getDocs, addDoc, DocumentData } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable, UploadTask } from 'firebase/storage';
import { db, storage } from '../../firebase-config';
import { FilesWithLink, ProgressBar, UploadedFiles, FirebaseContextInterface, FormValues } from './useFireBase.types';

const FireBaseContext = React.createContext<FirebaseContextInterface | null>(null);

export function FireBaseProvider({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState<boolean>(false);
  const [filesFromFirebase, setFilesFromFirebase] = useState<DocumentData[]>([]);
  const [isEverythingUploaded, setIsEverythingUploaded] = useState<boolean>(false);
  const [progressBar, setProgressBar] = useState<ProgressBar[]>([]);
  const [docId, setDocIt] = useState<string>();

  const getDataFromFirebase = async () => {
    setLoading(true);
    const q = query(collection(db, 'Files'));
    const filesFromDb = await getDocs(q);
    filesFromDb.forEach((fileFromDb) => {
      const fileData = fileFromDb.data();
      setFilesFromFirebase((prevState) => [...prevState, fileData]);
      setLoading(false);
    });
  };

  const uploadFormToFirebase = async (formValues: FormValues, filesWithLink: FilesWithLink[]) => {
    const docRef = await addDoc(collection(db, 'Files'), {
      File: [...filesWithLink],
      Title: formValues.title,
      Message: formValues.message,
    });
    setDocIt(docRef.id);
  };

  const uploadFileToCloud = async (files: UploadedFiles, formValues: FormValues) => {
    if (files === null) return;
    console.log(formValues);
    const promises: UploadTask[] = [];
    const filesWithLink: FilesWithLink[] = [];
    const filesWithLinkPromises: Promise<void>[] = [];

    files.forEach((file) => {
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file as unknown as Blob);
      promises.push(uploadTask);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          const loadingStatus: ProgressBar = {
            name: file.name,
            progress,
          };
          setProgressBar((prevState) => [...prevState, loadingStatus]);
        },

        (err) => err,

        () => {
          const fileWithLinkPromise = getDownloadURL(uploadTask.snapshot.ref).then((link) => {
            const fileDataWithLink = {
              name: file.name,
              size: +(file.size * 0.000001).toFixed(2),
              fileType: file.name.split('.').pop(),
              link,
            };
            filesWithLink.push(fileDataWithLink);
          });
          filesWithLinkPromises.push(fileWithLinkPromise);
        }
      );
    });
    await Promise.all(promises)
      .then(() => {
        Promise.all(filesWithLinkPromises).then(() => {
          uploadFormToFirebase(formValues, filesWithLink);
          setIsEverythingUploaded(true);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <FireBaseContext.Provider
      value={{
        loading,
        progressBar,
        uploadFormToFirebase,
        setProgressBar,
        setIsEverythingUploaded,
        isEverythingUploaded,
        filesFromFirebase,
        setFilesFromFirebase,
        uploadFileToCloud,
        docId,
        getDataFromFirebase,
      }}
    >
      {children}
    </FireBaseContext.Provider>
  );
}

export const useFirebase = () => {
  const errorContext = useContext(FireBaseContext);

  if (!errorContext) {
    throw Error('useError needs to be used inside ErrorContext');
  }

  return errorContext;
};
