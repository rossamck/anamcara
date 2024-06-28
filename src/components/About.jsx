import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-lg p-6"
    >
      <h1 className="text-3xl font-bold text-primary mb-4">About</h1>
      <p className="text-neutral mb-2">This is the about page.</p>
      <p className="text-neutral">Learn more about our mission and values.</p>
    </motion.div>
  );
}

export default About;
