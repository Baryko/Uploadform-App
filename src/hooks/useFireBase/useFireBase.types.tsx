import { DocumentData } from 'firebase/firestore';

export interface FormValues {
  title: string;
  message: string;
}
export interface FirebaseContextInterface {
  loading: boolean;
  progressBar: ProgressBar[];
  uploadFormToFirebase: (formValues: FormValues, filesWithLink: FilesWithLink[]) => Promise<void>;
  setProgressBar: React.Dispatch<React.SetStateAction<ProgressBar[]>>;
  setIsEverythingUploaded: React.Dispatch<React.SetStateAction<boolean>>;
  isEverythingUploaded: boolean;
  filesFromFirebase: DocumentData[];
  setFilesFromFirebase: React.Dispatch<React.SetStateAction<DocumentData[]>>;
  uploadFileToCloud: (files: UploadedFiles, formValues: FormValues) => Promise<void>;
  docId: string | undefined;
  getDataFromFirebase: () => Promise<void>;
  isOpen: boolean;
  handleCloseModal: () => void;
}
export interface FilesWithLink {
  name: string;
  size: number;
  fileType: string | undefined;
  link: string;
}

export interface ProgressBar {
  name: string;
  progress: number;
}

export type UploadedFiles = File[] | [];
