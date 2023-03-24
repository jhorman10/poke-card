import axios from 'axios';
import { useRouter } from 'next/router';

export default function useLogin(credentials) {
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    const response = await axios.post('/api/auth/login', credentials);
    response.status === 200 && router.push('/');
  };

  return {
    handleSubmit,
  };
}
