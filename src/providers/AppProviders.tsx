import React, { PropsWithChildren } from 'react';

import { GlobalStyle } from '../assets/styles/GlobalStyles/GlobalStyles';

import { ErrorProvider } from '../hooks/useError/useError';
import { FireBaseProvider } from '../hooks/useFireBase/useFireBase';

function AppProviders({ children }: PropsWithChildren) {
  return (
    <FireBaseProvider>
      <ErrorProvider>
        <GlobalStyle />
        {children}
      </ErrorProvider>
    </FireBaseProvider>
  );
}

export default AppProviders;
