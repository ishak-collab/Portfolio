
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[#080808] border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center relative">
        <div className="text-gray-500 text-sm text-center">
          &copy; 2026 <span className="text-white font-semibold">Zegaoui Ishak</span>. All Rights Reserved.
        </div>

        <button 
          onClick={scrollToTop}
          className="mt-6 md:mt-0 md:absolute md:right-6 w-12 h-12 bg-[#111] border border-white/10 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
