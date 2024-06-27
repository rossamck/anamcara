import React from 'react';
import Card from './Card';

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-4">Welcome to Anam Cara</h1>
      <div className="flex flex-wrap">
        <Card title="Our Mission" description="Learn more about our mission and values." />
        <Card title="Our Services" description="Explore the services we offer." />
        <Card title="Contact Us" description="Get in touch with us." />
      </div>
    </div>
  );
}

export default Home;
