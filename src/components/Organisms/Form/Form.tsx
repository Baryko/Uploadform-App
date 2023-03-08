/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import Inputfield from '../../Molecules/InputField/InputField';
import TextareaField from '../../Molecules/TextAreaField/TextAreaField';
import { StyledForm } from './Form.styles';

const Form = () => {
  const formInitialState = {
    title: '',
    message: '',
  };

  const [formValues, setFormValues] = useState(formInitialState);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldValue = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: fieldValue,
    }));
  };

  return (
    <StyledForm>
      <Inputfield
        id="title"
        placeholder="please insert a title"
        type="text"
        name="title"
        label="Title"
        value={formValues.title}
        handleValueChange={handleValueChange}
      />
      <TextareaField
        id="message"
        placeholder="insert your message here"
        name="message"
        label="Message (optional)"
        cols={5}
        rows={5}
        handleValueChange={handleValueChange}
        value={formValues.message}
      />
    </StyledForm>
  );
};

export default Form;
