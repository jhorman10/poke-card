import { useState } from 'react';

export default function useForm() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = credentials;

  const handleChange = ({ target }) => {
    setCredentials({
      ...credentials,
      [target.name]: target.value,
    });
  };

  const validForm = email !== '' && password !== '';

  return { email, password, validForm, credentials, handleChange };
}
