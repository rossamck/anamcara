import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-lg p-6"
    >
      <h1 className="text-3xl font-bold text-primary mb-4">Contact</h1>
      <p className="text-neutral mb-2">This is the contact page.</p>
      <p className="text-neutral">Contact information goes here</p>
    </motion.div>
  );
}

export default Contact;
