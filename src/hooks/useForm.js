import { useState } from 'react';

export default function useForm() {
  const [credentials, setCredentials] = useState({
    email: 'mail1@mail.com',
    password: 'pw1mail',
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
