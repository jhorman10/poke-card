import axios from 'axios';
import { useRouter } from 'next/router';

export const useLogout = () => {
  const router = useRouter();

  const getLogout = async () => {
    router.push('/login');
    await axios.post('/api/auth/logout');
  };

  return {
    getLogout,
  };
};
