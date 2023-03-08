import React from 'react';
import { Wrapper } from './ListElement.styles';
import { Props } from './ListElement.types';

// eslint-disable-next-line react/function-component-definition
const ListElement: React.FC<Props> = ({ name, fileType, size }) => {
  return (
    <Wrapper key={name}>
      {name}
      <span>
        {size} MB {fileType}
      </span>
    </Wrapper>
  );
};

export default ListElement;
