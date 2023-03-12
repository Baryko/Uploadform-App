/* eslint-disable react/function-component-definition */
import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import useFiles from '../../../hooks/useFiles/useFiles';
import FilesUpload from '../../Molecules/FilesUpload/FilesUpload';
import Inputfield from '../../Molecules/InputField/InputField';
import TextareaField from '../../Molecules/TextAreaField/TextAreaField';
import { StyledForm, Wrapper } from './Form.styles';
import FileList from '../../Atoms/FileList/FileList';
import ListElement from '../../Molecules/ListElement/ListElement';
import { Button } from '../../Atoms/Button/Button';
import { useFirebase } from '../../../hooks/useFireBase/useFireBase';
import UploadFinalizedScreen from '../../Molecules/UploadFinalizedScreen/UploadFinalizedScreen';
import Modal from '../Modal/Modal';
import ResetButton from '../../Atoms/ResetButton/ResetButton';
import { db } from '../../../firebase-config';
import useForm from '../../../hooks/useForm/useForm';
import FilesCounter from '../../Molecules/FilesCounter/FilesCounter';

const Form = () => {
  const { handleAddFile, files, handleDeleteFile, setFiles } = useFiles();
  const {
    formValues,
    setFormValues,
    handleValueChange,
    handleClearInput,
    titleValueFromLocalStorage,
    messageValueFromLocalStorage,
  } = useForm();

  const {
    loading,
    progressBar,
    setProgressBar,
    setIsEverythingUploaded,
    isEverythingUploaded,
    filesFromFirebase,
    setFilesFromFirebase,
    uploadFileToCloud,
    docId,
    getDataFromFirebase,
    isOpen,
    handleCloseModal,
  } = useFirebase();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    uploadFileToCloud(files, formValues);
  };

  const handleClearForm = async () => {
    setProgressBar([]);
    setFiles([]);
    setIsEverythingUploaded(false);
    await deleteDoc(doc(db, 'Files', `${docId}`));
    localStorage.clear();
    setFormValues({ title: '', message: '' });
  };

  return (
    <StyledForm method="post" onSubmit={handleSubmit}>
      <Inputfield
        id="title"
        placeholder="please insert a title"
        type="text"
        name="title"
        label="Title"
        value={titleValueFromLocalStorage || formValues.title}
        handleValueChange={handleValueChange}
      />
      <TextareaField
        id="message"
        placeholder="insert your message here"
        name="message"
        label="Message (optional)"
        cols={5}
        rows={5}
        handleValueChange={handleValueChange}
        value={messageValueFromLocalStorage || formValues.message}
      />
      <FilesCounter files={files} filesQuantity={files.length} />
      <Wrapper>
        <FilesUpload handleAddFile={handleAddFile} handleClearInput={handleClearInput} />
        {isEverythingUploaded ? (
          <UploadFinalizedScreen getDataFromFirebase={getDataFromFirebase} loading={loading} />
        ) : (
          <FileList>
            {files.map((file: { name: string; size: number }) => (
              <ListElement
                key={file.name}
                name={file.name}
                size={+(file.size * 0.000001).toFixed(2)}
                fileType={file.name.split('.').pop()}
                onClick={handleDeleteFile}
                progressBar={progressBar}
              />
            ))}
          </FileList>
        )}
      </Wrapper>

      <Modal
        isOpen={isOpen}
        handleClose={handleCloseModal}
        filesFromFirebase={filesFromFirebase}
        setfilesFromFirebase={setFilesFromFirebase}
      />
      {isEverythingUploaded ? (
        <ResetButton handleClearForm={handleClearForm} />
      ) : (
        <Button type="submit" disabled={!((formValues.title || titleValueFromLocalStorage) && files.length)}>
          Send
        </Button>
      )}
    </StyledForm>
  );
};

export default Form;
