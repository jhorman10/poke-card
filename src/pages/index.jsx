import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline m-10 text-center">
        POKE - CARD
      </h1>
      <div>
        <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 m-5 ">
          BUTTON
        </button>
      </div>
    </>
  );
}
