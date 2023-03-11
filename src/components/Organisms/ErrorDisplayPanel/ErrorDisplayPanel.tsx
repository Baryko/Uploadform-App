import React from 'react';
import { Wrapper } from './ErrorDisplayPanel.styles';
import { Button } from '../../Atoms/Button/Button';
import { useError } from '../../../hooks/useError/useError';
import errorIcon from '../../../assets/icons/warning.png';

function ErrorDisplayPanel() {
  const { error, dispatchError, errorInitialState } = useError();
  const { filesQuantityError, fileTypeError, filesSizeError, fileAlreadyExistError } = error;

  const handleClearErrors = () => {
    dispatchError((prevState) => ({ ...prevState, ...errorInitialState }));
  };

  return (
    <Wrapper>
      <img src={errorIcon} alt="successIcon" />
      <p>Oops... error occured</p>
      <span>{fileTypeError || null}</span>
      <span>{filesQuantityError || null}</span>
      <span>{filesSizeError || null}</span>
      <span>{fileAlreadyExistError || null}</span>
      <Button onClick={handleClearErrors}>Try again</Button>
    </Wrapper>
  );
}

export default ErrorDisplayPanel;
