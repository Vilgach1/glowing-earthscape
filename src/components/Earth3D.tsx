
import React from 'react';
import { motion } from 'framer-motion';

const Earth3D: React.FC = () => {
  return (
    <div className="w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center">
      <motion.div
        className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border border-gray-700"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity
        }}
        style={{
          background: 'radial-gradient(circle, rgba(100,100,100,0.4) 0%, rgba(50,50,50,0.2) 70%, rgba(30,30,30,0.1) 100%)',
          boxShadow: '0 0 30px rgba(200, 200, 200, 0.1)'
        }}
      >
        <div className="w-full h-full rounded-full grid grid-cols-3 grid-rows-3 overflow-hidden">
          {Array(9).fill(0).map((_, i) => (
            <div 
              key={i} 
              className="border border-gray-800 opacity-50"
              style={{
                background: i % 2 === 0 ? 'rgba(70, 70, 70, 0.1)' : 'rgba(40, 40, 40, 0.1)'
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Earth3D;
