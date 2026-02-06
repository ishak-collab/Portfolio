
import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // State for the sliding pill
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          if (id) setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update pill position logic
  useEffect(() => {
    const updatePillPosition = () => {
      const activeLink = linkRefs.current[activeSection];
      const container = navContainerRef.current;

      if (activeLink && container) {
        const linkRect = activeLink.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setPillStyle({
          left: linkRect.left - containerRect.left,
          width: linkRect.width,
          opacity: 1,
        });
      }
    };

    // Update immediately and on resize
    updatePillPosition();
    window.addEventListener('resize', updatePillPosition);
    // Small timeout to ensure layout is settled
    const timer = setTimeout(updatePillPosition, 50);

    return () => {
      window.removeEventListener('resize', updatePillPosition);
      clearTimeout(timer);
    };
  }, [activeSection, isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'liquid-glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-cyan-400 z-50">
          Isaac
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center relative" ref={navContainerRef}>
          
          {/* Sliding Liquid Glass Pill */}
          <div 
            className="absolute top-0 bottom-0 my-auto h-full rounded-full liquid-glass-lighter border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none"
            style={{ 
              left: `${pillStyle.left}px`, 
              width: `${pillStyle.width}px`, 
              opacity: pillStyle.opacity,
            }}
          />

          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                ref={(el) => { linkRefs.current[link.href.substring(1)] = el; }}
                className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300
                  ${isActive 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full liquid-glass transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100 border-t border-white/10' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 border border-transparent
                  ${isActive 
                    ? 'liquid-glass-lighter text-cyan-400 border-cyan-400/30' 
                    : 'text-gray-300 hover:text-cyan-400'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
