import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Cookie } from '../../components/Organisms/Form/Form.types';

const useForm = () => {
  const isCookie = useSelector<Cookie>((state) => state.isAccepted);
  const titleValueFromLocalStorage = localStorage.getItem('title');
  const messageValueFromLocalStorage = localStorage.getItem('message');
  const formInitialState = {
    title: titleValueFromLocalStorage || '',
    message: messageValueFromLocalStorage || '',
  };

  const [formValues, setFormValues] = useState(formInitialState);

  const handleClearInput = (e: React.MouseEvent<HTMLInputElement>): void => {
    e.currentTarget.value = '';
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldValue = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    const fieldName = e.target.name;
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: fieldValue,
    }));

    if (isCookie) {
      localStorage.setItem(fieldName, fieldValue);
    }
  };

  return {
    formValues,
    setFormValues,
    handleValueChange,
    isCookie,
    handleClearInput,
    titleValueFromLocalStorage,
    messageValueFromLocalStorage,
  };
};

export default useForm;
