import React, { PropsWithChildren } from 'react';

import { GlobalStyle } from '../assets/styles/GlobalStyles/GlobalStyles';

import { ErrorProvider } from '../hooks/useError/useError';

function AppProviders({ children }: PropsWithChildren) {
  return (
    <ErrorProvider>
      <GlobalStyle />
      {children}
    </ErrorProvider>
  );
}

export default AppProviders;
