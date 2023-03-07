export interface TextareaFieldTypes {
  id: string;
  placeholder: string;
  name: string;
  label: string;
  rows: number;
  cols: number;
  value: string;
  handleValueChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
