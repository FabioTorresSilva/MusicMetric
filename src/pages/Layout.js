import React from 'react';
import { Header } from './Header.js'; 
import { IconBar } from './IconBar.js'; 

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <IconBar />
    </div>
  );
};

export default Layout;