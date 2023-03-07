export interface InputFieldTypes {
  id: string;
  placeholder: string;
  type: string;
  name: string;
  label: string;
  value: string;
  handleValueChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
