import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ brand }) => {
  // React state to handle the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  
  // Use React Router location hook to see if we are currently on the Home view vs /travels
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Smooth scroll or routing redirect handler function
  const handleNavClick = (e, targetId) => {
    if (isHomePage) {
      // If we are on the homepage, keep standard SPA single-page smooth scroll
      e.preventDefault(); 
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      setIsOpen(false); // Automatically closes mobile drawer menu upon selection
    } else {
      // If we are on /travels, we do NOT run e.preventDefault(). 
      // The <Link> component will execute, changing path route back to "/" 
      // while forwarding the target element string in history state.
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-slate-50 text-slate-800 shadow-sm" id="navbarStandard">
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="flex flex-wrap items-center justify-between py-4">
            
          {/* Brand Logo - Returns to home top / about section */}
          <Link 
            className="flex flex-row items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold tracking-wide hover:text-sky-500 group select-none" 
            to="/"
            state={{ scrollToSection: 'about' }}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            {/* SVG Brand Icon - Mobile ready sizing */}
            <img 
              src={`${import.meta.env.BASE_URL}kjb-icon.svg`} 
              alt="KJB Logo Icon" 
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
            
            {/* Brand Text - Mobile layout controls built-in */}
            <span className="inline-block truncate">
              {brand}
            </span>
          </Link>

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

          {/* Navigation Links Menu Wrapper */}
          <div 
            id="navbarNav"
            className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto px-8 pt-2 pb-3 mt-2 mx-2 rounded-lg bg-white/80 border border-cyan-600/20 shadow-[0_4px_16px_rgba(8,145,178,0.1)] space-y-1 md:px-0 md:pt-0 md:pb-0 md:mt-0 md:mx-0 md:rounded-none md:bg-transparent md:border-0 md:shadow-none md:space-y-0`}
          >
            <ul className="flex flex-col mt-2 space-y-0 md:flex-row md:space-y-0 md:space-x-8 md:mt-0 md:ml-auto md:items-center">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact', 'Interests'].map((item) => (
                <li key={item}>
                  <Link
                    className="block py-2 text-slate-800 hover:text-sky-500 transition-colors duration-200"
                    to="/"
                    state={{ scrollToSection: item.toLowerCase() }} // Packages state history payload data
                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  >
                    {item}
                  </Link>
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