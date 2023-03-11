/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import ErrorDisplayPanel from '../components/Organisms/ErrorDisplayPanel/ErrorDisplayPanel';
import Form from '../components/Organisms/Form/Form';

import { MainTemplate } from '../components/Templates/MainTemplate';
import { useError } from '../hooks/useError/useError';

function App() {
  const { error } = useError();

  return (
    <MainTemplate>
      {error.isError ? <ErrorDisplayPanel /> : null}
      <Form />
    </MainTemplate>
  );
}

export default App;
