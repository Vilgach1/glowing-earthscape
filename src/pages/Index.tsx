
import React from 'react';
import Logo from '../components/Logo';
import Home from '../components/Home';
import About from '../components/About';

const Index: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      <Logo />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
};

export default Index;
