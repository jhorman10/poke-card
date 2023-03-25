import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const useLogout = () => {
  const [spinner, setSpinner] = useState(false);

  const router = useRouter();

  const getLogout = async () => {
    setSpinner(true);
    router.push('/login');
    await axios.post('/api/auth/logout');
  };

  return {
    spinner,
    getLogout,
  };
};
