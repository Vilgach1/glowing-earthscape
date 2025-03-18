
import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator: React.FC = () => {
  const handleClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={handleClick}>
      <div className="flex flex-col items-center">
        <p className="text-sm text-muted-foreground mb-2">Scroll Down</p>
        <ChevronDown className="animate-bounce-soft text-white h-6 w-6" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
