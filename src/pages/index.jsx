import { Inter } from 'next/font/google';
import Dashboard from './dashboard';
import LoginPage from './login';

const inter = Inter({ subsets: ['latin'] });

export default function app() {
  const isLogged = true;
  const showDashboard = () => {
    if (isLogged) {
      return <Dashboard />;
    }
    return <LoginPage />;
  };

  return <>{showDashboard()}</>;
}
