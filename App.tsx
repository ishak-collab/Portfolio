
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';

const App: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Neon Cursor Trail */}
      <CursorTrail />
      
      {/* Ambient Background Elements with Parallax */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div 
          className="bg-gradient-orb w-[500px] h-[500px] bg-cyan-500/20 top-[-100px] left-[-100px] animate-pulse"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        ></div>
        <div 
          className="bg-gradient-orb w-[600px] h-[600px] bg-blue-600/20 bottom-[-100px] right-[-100px] animate-pulse" 
          style={{ 
            animationDuration: '4s',
            transform: `translateY(${offsetY * -0.1}px)`
          }}
        ></div>
        <div 
          className="bg-gradient-orb w-[300px] h-[300px] bg-purple-500/20 top-[40%] left-[30%] animate-pulse" 
          style={{ 
            animationDuration: '6s',
            transform: `translateY(${offsetY * 0.05}px)`
          }}
        ></div>
      </div>

      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;