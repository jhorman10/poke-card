import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function useLogin(credentials) {
  const [spinner, setSpinner] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (credentials.email === '' || credentials.password === '') {
        return Swal.fire({
          icon: 'info',
          title: 'Hey!',
          text: 'Please enter your email and password',
        });
      }

      const response = await axios.post('/api/auth/login', credentials);

      if (response.status === 200) {
        setSpinner(true);
        router.push('/dashboard');
        setSpinner(false);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data,
      });
    }
  };

  return {
    spinner,
    handleSubmit,
  };
}
