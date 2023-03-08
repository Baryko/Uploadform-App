/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import useFiles from '../../../hooks/useFiles/useFiles';
import FilesUpload from '../../Molecules/FilesUpload/FilesUpload';
import Inputfield from '../../Molecules/InputField/InputField';
import TextareaField from '../../Molecules/TextAreaField/TextAreaField';
import { StyledForm, Wrapper } from './Form.styles';
import FileList from '../../Atoms/FileList/FileList';
import ListElement from '../../Molecules/ListElement/ListElement';

const Form = () => {
  const formInitialState = {
    title: '',
    message: '',
  };

  const [formValues, setFormValues] = useState(formInitialState);
  const { handleAddFile, files, handleDeleteFile } = useFiles();

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
      <Wrapper>
        <FilesUpload handleAddFile={handleAddFile} />
        <FileList>
          {files.map((file: { name: string; size: number }) => (
            <ListElement
              key={file.name}
              name={file.name}
              size={+(file.size * 0.000001).toFixed(2)}
              fileType={file.name.split('.').pop()}
              onClick={handleDeleteFile}
            />
          ))}
        </FileList>
      </Wrapper>
    </StyledForm>
  );
};

export default Form;
