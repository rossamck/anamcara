//src/com

import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-roboto">
      <header className="bg-primary text-white p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold font-caveat">Anam Cara Listening</div>
          <div>
            <Link className="mr-4 hover:text-gray-200" to="/">Home</Link>
            <Link className="mr-4 hover:text-gray-200" to="/about">About</Link>
            <Link className="hover:text-gray-200" to="/contact">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-neutral text-white p-4 text-center font-roboto">
        © 2024 Anam Cara
      </footer>
    </div>
  );
}

export default Layout;
