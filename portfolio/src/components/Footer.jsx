import React from 'react';

const Footer = ({ brand }) => {
  // Smooth scroll handler function adapted directly from your Navbar behavior
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="w-full bg-gradient-to-b from-sky-100 to-blue-50 border-b border-slate-200 px-4 pb-12 pt-6">
      {/* Main Glassmorphic Container Card */}
      <div className="container mx-auto max-w-7xl bg-white/70 backdrop-blur-md border border-cyan-500/10 shadow-[0_4px_24px_rgba(8,145,178,0.04)] rounded-3xl p-8 md:p-10 flex flex-col gap-8 relative overflow-hidden">

        {/* Top Section: Link Directories Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-4">
          
          {/* Column 1: Brand Info Block (Span 5) */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <h3 className="text-2xl font-bold tracking-wide text-cyan-600">
              {brand}
            </h3>
            <p className="text-slate-500 text-sm font-light leading-relaxed max-w-sm">
              Versatile full-stack developer crafting meaningful digital experiences. Driven by a mindset of constant learning, evolution, and creative innovation.
            </p>
          </div>

          {/* Column 2: Quick Navigation Directory (Span 3) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-cyan-600 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleScroll(e, item.toLowerCase())}
                    className="text-slate-600 hover:text-sky-500 text-sm font-light transition-colors duration-200 block w-fit"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Professional Services Matrix (Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-cyan-600 tracking-wide">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                'Web Development',
                'Software Development',
                'Backend Development',
                'Database Management'
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 text-slate-600 text-sm font-light">
                  {/* Custom Cyan Dot Bullet Accent */}
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-px bg-slate-200/60" />

        {/* Bottom Section: Legal & Credits Panel */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <div>
            Made by <span className="font-normal text-slate-700">{brand}</span>
          </div>
          
          <div className="text-center">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;