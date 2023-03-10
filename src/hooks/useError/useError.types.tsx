export interface ErrorContextInterface {
  error: Errors;
  errorInitialState: Errors;
  dispatchError: (cb: (prevErrors: Errors) => Errors) => void;
}
export interface Errors {
  isError: boolean;
  filesQuantityError: string;
  fileTypeError: string;
  filesSizeError: string;
  fileAlreadyExistError: string;
}
