import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/12048201/pexels-photo-12048201.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          transform: `translateY(${offset}px)`,
          backgroundPosition: 'center 75%',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900/20" />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-20 text-center">
        <h1 className="font-bebas-pro text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Welcome to <span className="text-[#E10600]">F1 Zone</span>
          <span className="block mt-2 md:mt-4">Your Digital Pit Lane</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
          Real-time race tools. Fan-first experiences. On-chain prediction markets.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#features" 
            className="bg-[#E10600] hover:bg-[#ff0800] text-white font-medium py-3 px-8 rounded-md transition-all shadow-lg hover:shadow-red-500/20 text-center min-w-[180px]"
          >
            Explore F1 Zone
          </a>
          <a 
            href="#markets" 
            className="bg-[#0090D0] hover:bg-[#00a0e6] text-white font-medium py-3 px-8 rounded-md transition-all shadow-lg hover:shadow-blue-500/20 text-center min-w-[180px]"
          >
            View Markets
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-white hover:border-[#E10600] text-white hover:text-[#E10600] font-medium py-3 px-8 rounded-md transition-all text-center min-w-[180px]"
          >
            Join the Race
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white opacity-80" />
      </div>
    </section>
  );
};

export default HeroSection;