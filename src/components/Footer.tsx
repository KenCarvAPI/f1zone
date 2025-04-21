import React from 'react';
import { Flag, Twitter, Instagram, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center mb-6 md:mb-0">
            <Flag className="h-8 w-8 text-[#E10600] mr-2" />
            <span className="text-xl font-bold tracking-tight">F1 ZONE</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#E10600] transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#E10600] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#E10600] transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#E10600] transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 pb-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} F1 Zone. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-6">
            F1 Zone is not affiliated with Formula 1, Formula One, F1, or any associated brands. 
            All F1 logos, marks, and content are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;