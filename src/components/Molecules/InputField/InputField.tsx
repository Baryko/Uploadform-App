/* eslint-disable react/require-default-props */
import React from 'react';
import Input from '../../Atoms/Input/Input';
import Label from '../../Atoms/Label/Label';
import Wrapper from './InputField.styles';
import { InputFieldTypes } from './InputField.types';

// eslint-disable-next-line react/function-component-definition
const Inputfield: React.FC<InputFieldTypes> = ({
  id,
  name,
  placeholder,
  label,
  type = 'text',
  handleValueChange,
  value,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} id={id} onChange={handleValueChange} value={value} />
    </Wrapper>
  );
};

export default Inputfield;
