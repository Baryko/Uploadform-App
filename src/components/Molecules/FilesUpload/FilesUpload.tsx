/* eslint-disable react/function-component-definition */
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Label from '../../Atoms/Label/Label';
import Input from '../../Atoms/Input/Input';
import { UploadField } from './FilesUpload.styles';
import useDragAndDrop from '../../../hooks/useDragAndDrop/useDragAndDrop';
import { Props } from './FilesUpload.types';

const FilesUpload: React.FC<Props> = ({ handleAddFile, handleClearInput }) => {
  const uploadRef = useRef<HTMLDivElement>(null);
  const { onDragEnter, onDragLeave, onDragOver, onDrop } = useDragAndDrop(uploadRef);

  return (
    <UploadField
      ref={uploadRef}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <Label htmlFor="fileInput">
        click here or drop files to upload.
        <FontAwesomeIcon icon={faUpload} fontSize="22px" />
      </Label>
      <Input
        name="fileInput"
        type="file"
        id="fileInput"
        multiple
        accept=".JPEG,.JPG,.PNG,.MP4"
        onChange={handleAddFile}
        onClick={handleClearInput}
      />
    </UploadField>
  );
};

export default FilesUpload;
