import React, { useState } from 'react';

const Navbar = ({ brand }) => {
  // React state to handle the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler function
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Stop instant browser jump
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Aligns the top of the section with the top of the screen
      });
      
      setIsOpen(false); // Automatically closes mobile drawer menu upon selection
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-slate-50 text-slate-800 shadow-sm" id="navbarStandard">
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="flex flex-wrap items-center justify-between py-4">
            
          {/* Brand */}
          <a 
            className="text-2xl font-bold tracking-wide hover:text-sky-500" 
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
          >
            {brand}
          </a>

          {/* Mobile Toggler Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="border border-slate-200 shadow-inner inline-flex items-center p-2 text-slate-800 hover:text-sky-500 rounded-md md:hidden"
            aria-label="Toggle navigation"
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                // X icon when menu is open
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger lines when menu is closed
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div 
            id="navbarNav"
            className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto px-8 pt-2 pb-3 mt-2 mx-2 rounded-lg bg-white/80 border border-cyan-600/20 shadow-[0_4px_16px_rgba(8,145,178,0.1)] space-y-1 md:px-0 md:pt-0 md:pb-0 md:mt-0 md:mx-0 md:rounded-none md:bg-transparent md:border-0 md:shadow-none md:space-y-0`}
          >
            {/* Added md:items-center to keep row content vertically aligned */}
            <ul className="flex flex-col mt-2 space-y-0 md:flex-row md:space-y-0 md:space-x-8 md:mt-0 md:ml-auto md:items-center">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact', 'Interests'].map((item) => (
                <li key={item}>
                  <a
                    className="block py-2 text-slate-800 hover:text-sky-500 transition-colors duration-200"
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleScroll(e, item.toLowerCase())} // Integrated programmatic smooth scroll
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;