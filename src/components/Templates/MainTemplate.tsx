/* eslint-disable import/prefer-default-export */
import React, { PropsWithChildren } from 'react';
import { Wrapper } from './MainTemplate.styles';

// eslint-disable-next-line react/function-component-definition
export const MainTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
