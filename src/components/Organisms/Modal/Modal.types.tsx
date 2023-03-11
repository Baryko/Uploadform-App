import { DocumentData } from 'firebase/firestore';

export interface ModalTypes {
  isOpen: boolean;
  handleClose: () => void;
  filesFromFirebase: DocumentData;
  setfilesFromFirebase: React.Dispatch<React.SetStateAction<DocumentData[]>>;
}

export interface DataFromFb {
  Title: string;
  Message: string;
  File: [{ fileType: string; link: string; name: string; size: number }];
}

export interface File {
  fileType: string;
  link: string;
  name: string;
  size: number;
}
