// src/components/Home.jsx
import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
    >
      <h1 className="text-3xl font-bold text-primary mb-4">Welcome to Anam Cara</h1>
      <div className="flex flex-wrap">
        <Card title="Our Mission" description="Learn more about our mission and values." link="/mission" />
        <Card title="Our Services" description="Explore the services we offer." link="/services" />
        <Card title="Contact Us" description="Get in touch with us." link="/contact" />
        <Card title="External Link" description="This is an external link." link="https://example.com" external />
      </div>
    </motion.div>
  );
}

export default Home;
