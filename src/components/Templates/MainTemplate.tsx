import React, { PropsWithChildren } from 'react';

// eslint-disable-next-line react/function-component-definition
const MainTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return <MainTemplate>{children}</MainTemplate>;
};
