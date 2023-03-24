import { Inter } from 'next/font/google';
import Home from './home';
import Layout from './Layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function app() {
  return (
    <Layout>
      <Home/>
    </Layout>
  );
}