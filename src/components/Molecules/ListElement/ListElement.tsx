import React from 'react';
import DeleteButton from '../../Atoms/DeleteButton/DeleteButton';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Wrapper } from './ListElement.styles';
import { Props } from './ListElement.types';

// eslint-disable-next-line react/function-component-definition
const ListElement: React.FC<Props> = ({ name, fileType, size, onClick, progressBar }) => {
  const elementProgressBar = progressBar.filter((bar) => bar.name === name);

  const progress = progressBar.length > 0 ? elementProgressBar[elementProgressBar.length - 1].progress : null;

  return (
    <Wrapper key={name}>
      {progress ? <ProgressBar progressValue={progress} /> : null}
      {name}
      <span>
        {size} MB {fileType}
      </span>
      {progress ? null : <DeleteButton onClick={onClick} name={name} />}
    </Wrapper>
  );
};

export default ListElement;
