import React from 'react';
import DeleteButton from '../../Atoms/DeleteButton/DeleteButton';
import { Wrapper } from './ListElement.styles';
import { Props } from './ListElement.types';

// eslint-disable-next-line react/function-component-definition
const ListElement: React.FC<Props> = ({ name, fileType, size, onClick }) => {
  return (
    <Wrapper key={name}>
      {name}
      <span>
        {size} MB {fileType}
      </span>
      <DeleteButton onClick={onClick} name={name} />
    </Wrapper>
  );
};

export default ListElement;
