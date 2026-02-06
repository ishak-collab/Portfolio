
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Construct the mailto link
    const mailtoLink = `mailto:ishaqzg@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <RevealOnScroll>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Contact <span className="text-cyan-400">Me!</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="liquid-glass p-8 md:p-12 rounded-3xl shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white backdrop-blur-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white backdrop-blur-sm"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white backdrop-blur-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                <textarea 
                  rows={5} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..." 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white backdrop-blur-sm"
                  required
                ></textarea>
              </div>

              <button type="submit" className="neon-button w-full py-4 rounded-xl font-bold text-lg shadow-lg text-white">
                Send Message
              </button>
            </form>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10">
              <ContactInfoItem icon={<Phone size={20} />} title="Call Me" detail="+2135 40 68 ** **" />
              <ContactInfoItem icon={<Mail size={20} />} title="Email Me" detail="ishaqzg@gmail.com" />
              <ContactInfoItem icon={<MapPin size={20} />} title="Location" detail="Algeria Chlef, 02" />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const ContactInfoItem: React.FC<{ icon: React.ReactNode, title: string, detail: string }> = ({ icon, title, detail }) => (
  <div className="flex items-center space-x-4">
    <div className="w-10 h-10 rounded-full bg-cyan-400/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-sm text-gray-400 font-medium">{title}</h4>
      <p className="text-white font-semibold">{detail}</p>
    </div>
  </div>
);

export default Contact;
