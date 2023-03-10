/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, PropsWithChildren, useContext } from 'react';
import { ErrorContextInterface, Errors } from './useError.types';

const ErrorContext = React.createContext<ErrorContextInterface | null>(null);

export function ErrorProvider({ children }: PropsWithChildren) {
  const errorInitialState = {
    isError: false,
    filesQuantityError: '',
    fileTypeError: '',
    filesSizeError: '',
    fileAlreadyExistError: '',
  };
  const [error, setError] = useState<Errors>(errorInitialState);

  const dispatchError = (message: React.SetStateAction<Errors>) => setError(message);

  return <ErrorContext.Provider value={{ error, dispatchError, errorInitialState }}>{children}</ErrorContext.Provider>;
}

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext) {
    throw Error('useError needs to be used inside ErrorContext');
  }

  return errorContext;
};
