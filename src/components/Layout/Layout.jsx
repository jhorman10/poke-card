import NavBar from '@/components/NavBar';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
