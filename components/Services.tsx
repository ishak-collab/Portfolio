
import React from 'react';
import { Code, Palette, Search, Layout, Database, Smartphone } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const services = [
  {
    icon: <Code size={40} />,
    title: 'Web Development',
    desc: 'Building responsive, high-performance websites using the latest technologies and frameworks.'
  },
  {
    icon: <Palette size={40} />,
    title: 'UI/UX Design',
    desc: 'Creating intuitive and visually stunning user interfaces that prioritize user experience and accessibility.'
  },
  {
    icon: <Search size={40} />,
    title: 'SEO Optimization',
    desc: 'Enhancing website visibility on search engines to drive organic traffic and improve rankings.'
  },
  {
    icon: <Smartphone size={40} />,
    title: 'App Design',
    desc: 'Designing modern mobile applications that provide a seamless experience across all devices.'
  },
  {
    icon: <Database size={40} />,
    title: 'Backend Solutions',
    desc: 'Developing robust server-side logic and database structures for scalable applications.'
  },
  {
    icon: <Layout size={40} />,
    title: 'Graphic Design',
    desc: 'Crafting unique brand identities, logos, and marketing materials that stand out.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <div 
                className="group relative p-8 liquid-glass rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] h-full"
              >
                <div className="mb-6 text-cyan-400 transition-transform group-hover:scale-110 group-hover:neon-glow-cyan">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300">{s.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
