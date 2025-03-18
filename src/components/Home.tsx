
import React from 'react';
import Earth3D from './Earth3D';
import ScrollIndicator from './ScrollIndicator';

const Home: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(50,50,50,0.1)_0%,_rgba(0,0,0,0)_70%)]"></div>
      
      <div className="relative z-10 w-full">
        <Earth3D />
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Home;
