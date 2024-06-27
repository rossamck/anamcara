import React from 'react';

function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
      <p className="text-neutral">{description}</p>
    </div>
  );
}

export default Card;
