/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';
import Cookies from '../components/Organisms/Cookies/Cookies';
import DeviceError from '../components/Organisms/DeviceError/DeviceError';
import ErrorDisplayPanel from '../components/Organisms/ErrorDisplayPanel/ErrorDisplayPanel';
import Form from '../components/Organisms/Form/Form';

import { MainTemplate } from '../components/Templates/MainTemplate';
import { useError } from '../hooks/useError/useError';

function App() {
  const { error } = useError();
  const [isCookiesModalVisible, setIsCookiesModalVisible] = useState<boolean>(true);

  return (
    <MainTemplate>
      <DeviceError />
      {error.isError ? <ErrorDisplayPanel /> : null}
      <Form />
      {isCookiesModalVisible ? <Cookies setIsCookiesModalVisible={setIsCookiesModalVisible} /> : null}
    </MainTemplate>
  );
}

export default App;
