import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <nav>
          <Link className="mr-4" to="/">Home</Link>
          <Link className="mr-4" to="/about">About</Link>
          <Link className="mr-4" to="/contact">Contact</Link>
        </nav>
      </header>
      <main className="flex-grow p-4">
        {children}
      </main>
      <footer className="bg-blue-500 text-white p-4 text-center">
        © 2024 Your Company
      </footer>
    </div>
  );
}

export default Layout;
