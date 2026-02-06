
import React, { useEffect, useState } from 'react';
import TypingText from './TypingText';
import { Instagram, Github, Send } from 'lucide-react';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // EDIT HERE: Update these links to your actual social media profiles
  const socialLinks = {
    instagram: "https://instagram.com/zegaoui_ishak",
    telegram: "https://t.me/b4_k1", 
    github: "https://github.com/ishak-collab"
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className={`space-y-6 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-medium">Hello, it's Me</h3>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Zegaoui <span className="text-cyan-400 neon-glow-cyan">Ishak</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold">
              And I'm a <TypingText phrases={['Full Stack Developer', 'Graphic Designer', 'UI/UX Specialist', 'Creative Thinker']} />
            </h2>
          </div>
          <p className="text-gray-400 max-w-lg leading-relaxed text-lg">
            Crafting digital experiences that blend aesthetic elegance with technical precision. 
            Focused on building high-performance web applications and visually stunning interfaces.
          </p>
          
          <div className="flex space-x-4">
            <SocialIcon icon={<Instagram size={20} />} href={socialLinks.instagram} delay={0} />
            <SocialIcon icon={<Send size={20} />} href={socialLinks.telegram} delay={100} />
            <SocialIcon icon={<Github size={20} />} href={socialLinks.github} delay={200} />
          </div>
        </div>

        {/* Right Content */}
        <div className={`flex justify-center md:justify-end transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 neon-border-cyan animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full border border-blue-500/20 animate-spin-slow"></div>
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-tr from-cyan-500 to-blue-600 p-1">
              <img 
                src="https://static0.thegamerimages.com/wordpress/wp-content/uploads/2025/03/untitled-design-2-1.jpg?w=1600&h=900&fit=crop" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode, href: string, delay?: number }> = ({ icon, href, delay = 0 }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    style={{ transitionDelay: `${delay}ms` }}
    className="w-10 h-10 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);

export default Hero;
