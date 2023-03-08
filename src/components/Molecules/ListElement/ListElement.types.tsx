export interface ProgressBarTypes {
  name: string;
  progress: number;
}

export interface Props {
  name: string;
  fileType: string | undefined;
  size: number;
  onClick: (a: string) => void;
}
