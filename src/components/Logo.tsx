
import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-6 z-10"
    >
      <h1 className="text-2xl font-bold tracking-wider animate-glow text-glow">
        VILGACH.dev
      </h1>
    </motion.div>
  );
};

export default Logo;
