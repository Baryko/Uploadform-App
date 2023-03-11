import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from '../assets/styles/GlobalStyles/GlobalStyles';
import { ErrorProvider } from '../hooks/useError/useError';
import { FireBaseProvider } from '../hooks/useFireBase/useFireBase';
import { store } from '../store/store';

function AppProviders({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <FireBaseProvider>
        <ErrorProvider>
          <GlobalStyle />
          {children}
        </ErrorProvider>
      </FireBaseProvider>
    </Provider>
  );
}

export default AppProviders;
