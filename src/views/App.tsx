/* eslint-disable @typescript-eslint/no-shadow */
import { deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Beforeunload } from 'react-beforeunload';
import Cookies from '../components/Organisms/Cookies/Cookies';
import DeviceError from '../components/Organisms/DeviceError/DeviceError';
import ErrorDisplayPanel from '../components/Organisms/ErrorDisplayPanel/ErrorDisplayPanel';
import Form from '../components/Organisms/Form/Form';

import { MainTemplate } from '../components/Templates/MainTemplate';
import { db } from '../firebase-config';
import { useError } from '../hooks/useError/useError';
import { useFirebase } from '../hooks/useFireBase/useFireBase';

function App() {
  const { error } = useError();
  const [isCookiesModalVisible, setIsCookiesModalVisible] = useState<boolean>(true);
  const { docId } = useFirebase();

  const handleOnBeforeunload = async () => {
    await deleteDoc(doc(db, 'Files', `${docId}`));
  };

  return (
    <MainTemplate>
      <Beforeunload onBeforeunload={handleOnBeforeunload} />
      <DeviceError />
      {error.isError ? <ErrorDisplayPanel /> : null}
      <Form />
      {isCookiesModalVisible ? <Cookies setIsCookiesModalVisible={setIsCookiesModalVisible} /> : null}
    </MainTemplate>
  );
}

export default App;
