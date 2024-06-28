import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, description, link, external }) {
  const CardContent = (
    <>
      <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
      <p className="text-neutral">{description}</p>
    </>
  );

  return external ? (
    <a href={link} className="block bg-white shadow-md rounded-lg p-6 m-4 hover:shadow-lg transition-shadow duration-200" target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    <Link to={link} className="block bg-white shadow-md rounded-lg p-6 m-4 hover:shadow-lg transition-shadow duration-200">
      {CardContent}
    </Link>
  );
}

export default Card;
