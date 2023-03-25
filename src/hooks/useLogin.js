import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function useLogin(credentials) {
  const [spinner, setSpinner] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/auth/login', credentials);
    if (response.status === 200) {
      setSpinner(true);
      router.push('/dashboard');
    }
  };

  return {
    spinner,
    handleSubmit,
  };
}
