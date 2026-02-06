
import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left - Image */}
        <RevealOnScroll>
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://avatarfiles.alphacoders.com/377/thumb-1920-377436.jpg" 
                alt="About Me" 
                className="relative w-full max-w-md rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </RevealOnScroll>

        {/* Right - Text */}
        <div className="order-1 md:order-2">
          <RevealOnScroll delay={200}>
            <div className="liquid-glass rounded-3xl p-8 md:p-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-cyan-400">Me</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-100">
                A Passionate Developer & Creative Problem Solver
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I've spent the last 5 years honing my skills in front-end and back-end technologies. 
                My journey started with a simple "Hello World" and evolved into architecting complex systems that help businesses grow.
                <br /><br />
                I believe that great design and clean code go hand-in-hand. When I'm not coding, you can find me exploring the latest UI trends, experimenting with motion graphics, or drinking excessive amounts of coffee.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
