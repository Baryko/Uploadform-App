import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface Props {
  name: string;
  onClick: (a: string) => void;
}

// eslint-disable-next-line react/function-component-definition
const DeleteButton: React.FC<Props> = ({ onClick, name }) => {
  return (
    <div>
      <FontAwesomeIcon onClick={() => onClick(name)} icon={faTrash} fontSize="16px" style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default DeleteButton;
