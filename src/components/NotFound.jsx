import React from 'react';

function NotFound() {
  return (
    <div className="not-found min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-neutral mb-4">Page Not Found</p>
        <a href="/" className="text-primary underline">
          Go back to Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
