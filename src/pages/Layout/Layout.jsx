import Aside from '@/components/Aside';
import NavBar from '@/components/NavBar';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="">
      <NavBar />
      <Aside />
      {children}
    </div>
  );
}
