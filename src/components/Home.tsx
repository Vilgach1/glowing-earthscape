
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Earth3D from './Earth3D';
import ScrollIndicator from './ScrollIndicator';

const Home: React.FC = () => {
  useEffect(() => {
    // Hide scrollbar on initial load for cleaner animation
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling after animations
    const timer = setTimeout(() => {
      document.body.style.overflow = '';
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-b from-black/50 to-background z-0"
      ></motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(50,50,50,0.1)_0%,_rgba(0,0,0,0)_70%)]"
      ></motion.div>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full"
      >
        <Earth3D />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
};

export default Home;
