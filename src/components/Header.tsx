import React, { useState, useEffect } from 'react';
import { Flag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Flag className="h-8 w-8 text-[#E10600] mr-2" />
          <span className="text-xl font-bold tracking-tight">F1 ZONE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/#features" className="text-sm font-medium hover:text-[#E10600] transition-colors">Features</Link>
          <Link to="/markets" className={`text-sm font-medium transition-colors ${location.pathname === '/markets' ? 'text-[#E10600]' : 'hover:text-[#E10600]'}`}>Markets</Link>
          <Link to="/#token" className="text-sm font-medium hover:text-[#E10600] transition-colors">$ZONE Token</Link>
          <Link to="/#contact" className="text-sm font-medium hover:text-[#E10600] transition-colors">Early Access</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-800 absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/#features" 
              className="text-sm font-medium p-2 hover:bg-zinc-700 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/markets" 
              className={`text-sm font-medium p-2 hover:bg-zinc-700 rounded ${location.pathname === '/markets' ? 'text-[#E10600]' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Markets
            </Link>
            <Link 
              to="/#token" 
              className="text-sm font-medium p-2 hover:bg-zinc-700 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              $ZONE Token
            </Link>
            <Link 
              to="/#contact" 
              className="text-sm font-medium p-2 hover:bg-zinc-700 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Early Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;