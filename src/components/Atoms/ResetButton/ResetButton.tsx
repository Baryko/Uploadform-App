import React from 'react';
import Button from './ResetButton.styles';
import { Props } from './ResetButton.types';

function ResetButton({ handleClearForm }: Props) {
  return (
    <Button type="button" onClick={handleClearForm}>
      Start again
    </Button>
  );
}

export default ResetButton;
