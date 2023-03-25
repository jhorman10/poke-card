import { Inter } from 'next/font/google';
import LoginPage from './login';

const inter = Inter({ subsets: ['latin'] });

export default function app() {
  return (
    <div className="w-screen h-screen flex content-center justify-start">
      <LoginPage />
    </div>
  );
}
