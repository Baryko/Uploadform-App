import React from 'react';
import { Wrapper } from './FilesCounter.styles';
import { Props } from './FilesCounter.types';

function FilesCounter({ files, filesQuantity }: Props) {
  const uploadedFilesSize: number = files.reduce((total: number, value: File) => total + value.size, 0);
  const uploadedFilesSizeInMb = +(uploadedFilesSize * 0.000001).toFixed(2);
  return (
    <Wrapper>
      {uploadedFilesSize ? <span>Files size: {uploadedFilesSizeInMb} MB </span> : <span>Files size: </span>}
      {filesQuantity ? <span>Files quantity: {filesQuantity} </span> : <span>Files quantity: </span>}
    </Wrapper>
  );
}

export default FilesCounter;
