import React from 'react';
import Wrapper from './TextAreaField.styles';
import Label from '../../Atoms/Label/Label';
import TextArea from '../../Atoms/TextArea/TextArea';
import { TextareaFieldTypes } from './TextAreaField.types';

// eslint-disable-next-line react/function-component-definition
const TextareaField: React.FC<TextareaFieldTypes> = ({
  id,
  name,
  placeholder,
  label,
  rows,
  cols,
  handleValueChange,
  value,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <TextArea
        name={name}
        placeholder={placeholder}
        id={id}
        rows={rows}
        cols={cols}
        onChange={handleValueChange}
        value={value}
      />
    </Wrapper>
  );
};

export default TextareaField;
