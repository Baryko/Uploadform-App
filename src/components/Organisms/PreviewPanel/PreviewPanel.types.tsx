export interface Props {
  link: string;
  setIsPreview: React.Dispatch<React.SetStateAction<{ displayFile: boolean; link: string; fileType: string }>>;
  fileType: string;
}
