import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const useUser = () => {
  const [user, setUser] = useState({
    email: '',
    username: '',
  });

  const router = useRouter();

  const getProfile = async () => {
    const response = await axios.get('/api/auth/profile');
    response.status === 401 && router.push('/login');

    setUser(response.data);
  };

  return { user, getProfile };
};
