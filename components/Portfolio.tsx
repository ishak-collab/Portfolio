
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  { id: 1, title: 'E-Commerce Platform', category: 'Web App', img: 'https://picsum.photos/seed/p1/600/400' },
  { id: 2, title: 'Modern CRM System', category: 'Software', img: 'https://picsum.photos/seed/p2/600/400' },
  { id: 3, title: 'Fitness Tracker App', category: 'Mobile', img: 'https://picsum.photos/seed/p3/600/400' },
  { id: 4, title: 'Travel Booking Site', category: 'Web', img: 'https://picsum.photos/seed/p4/600/400' },
  { id: 5, title: 'Cyberpunk Portfolio', category: 'Design', img: 'https://picsum.photos/seed/p5/600/400' },
  { id: 6, title: 'AI Chat Interface', category: 'Web App', img: 'https://picsum.photos/seed/p6/600/400' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Latest <span className="text-cyan-400">Project</span>
          </h2>
          <p className="text-gray-400 text-lg">Exploring my creative workflow through real-world examples</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.id} className="relative group overflow-hidden rounded-2xl bg-[#111] aspect-[3/2]">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-cyan-300 text-sm font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {p.category}
                </span>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {p.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 cursor-pointer hover:bg-cyan-400 hover:text-white">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
