import React from 'react';
import { ErrorContainer, Wrapper } from './DeviceError.styles';
import monitorIcon from '../../../assets/icons/desktop.png';

// eslint-disable-next-line react/function-component-definition
const DeviceError = () => {
  return (
    <Wrapper>
      <ErrorContainer>
        <img src={monitorIcon} alt="" />
        <span>
          <strong>I am sorry!</strong>
        </span>
        <span> Design works on desktop screens only.</span>
      </ErrorContainer>
    </Wrapper>
  );
};

export default DeviceError;
