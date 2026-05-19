import React, { useState } from 'react';
import Section from '../../components/Section';

const Experience = ({ data }) => {
  // Sort data to ensure the newest experience displays first
  const sortedExperience = data ? [...data].reverse() : [];
  
  // Carousel States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance threshold in pixels
  const minSwipeDistance = 50;

  // CHANGED: Hard stop at the end instead of looping back to 0
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sortedExperience.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  // CHANGED: Hard stop at 0 instead of jumping to the last index
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  // Capture where the user first places their finger
  const handleTouchStart = (e) => {
    setTouchEnd(null); 
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Track the finger movement
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Calculate swipe distance and direction on finger lift
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // CHANGED: Only allow next slide if we aren't already at the absolute end
    if (isLeftSwipe && currentIndex < sortedExperience.length - 1) {
      nextSlide();
    // CHANGED: Only allow previous slide if we aren't already at the absolute beginning
    } else if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  if (!sortedExperience.length) return null;

  return (
    <Section id="experience" className="scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Header Title Card */}
        <div className="relative w-full max-w-2xl bg-white/70 backdrop-blur-md border border-cyan-500/10 shadow-[0_4px_24px_rgba(8,145,178,0.04)] rounded-2xl p-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">Work Experience</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-3" />
          <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
            A timeline of my professional journey and engineering contributions.
          </p>
        </div>

        {/* Outer Carousel Wrapper */}
        <div className="relative w-full max-w-7xl flex items-center group px-2 sm:px-14">
          
          {/* Left Arrow Button - Optional UI Polish: disabled visual state when at index 0 */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 z-10 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-white/90 border border-slate-200 shadow-md transition-all duration-300 ${
              currentIndex === 0 
                ? 'opacity-30 cursor-not-allowed text-slate-400' 
                : 'text-slate-600 hover:text-cyan-500 hover:border-cyan-400 hover:shadow-lg'
            }`}
            aria-label="Previous slide"
          >
            <i className="fa-solid fa-chevron-left text-sm"></i>
          </button>

          {/* Carousel Mask Box Window */}
          <div 
            className="w-full overflow-hidden touch-pan-y shadow-2xl rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {sortedExperience.map((job, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0"
                >
                  {/* Card Container Base */}
                  <div className="h-full rounded-2xl p-6 md:p-10 relative overflow-hidden bg-slate-50 border border-slate-100/50 flex flex-col text-center md:text-center lg:text-left items-center md:items-center lg:items-start min-h-[380px]">
                    
                    {/* Subtle tech border accent line */}
                    <div className="absolute top-0 left-0 w-full h-1 lg:w-1 lg:h-full bg-gradient-to-r from-cyan-500 to-blue-500 lg:bg-gradient-to-b" />
                    
                    {/* Outer Layout Wrapper for Header Details */}
                    <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-2">
                      
                      {/* Left Side Group: Role and Pill */}
                      <div className="flex flex-col items-center md:items-center lg:items-start">
                        <span className="inline-block px-4 py-1.5 bg-sky-100/70 border border-cyan-400/40 rounded-full text-xs font-semibold text-cyan-600 mb-1 lg:mb-0">
                          {job.period}
                        </span>

                        <h3 className="text-xl md:text-2xl font-bold tracking-wide text-slate-800 leading-tight mt-2">
                          {job.role}
                        </h3>
                      </div>

                      {/* Right Side Group: Company Name */}
                      <div className="flex flex-col items-center md:items-center lg:items-end lg:pt-2">
                        <h4 className="text-base font-bold uppercase tracking-wider text-blue-600 mb-2 lg:mb-0">
                          {job.company}
                        </h4>
                      </div>

                    </div>

                    {/* Decorative horizontal line beneath titles */}
                    <div className="w-16 lg:w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6 mx-auto lg:mx-0" />

                    {/* Highlights List Box */}
                    <ul className="text-slate-600 text-sm md:text-base leading-relaxed font-light space-y-4 list-none text-left w-full flex-grow">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-cyan-500 mt-1.5 text-xs flex-shrink-0">
                            <i className="fa-solid fa-caret-right"></i>
                          </span>
                          <span>
                            {/* Make the title bold, and add the description right after */}
                            <strong className="font-semibold text-slate-800">{highlight.title}:</strong> {highlight.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button - Optional UI Polish: disabled visual state when at end index */}
          <button 
            onClick={nextSlide}
            disabled={currentIndex === sortedExperience.length - 1}
            className={`absolute right-0 z-10 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-white/90 border border-slate-200 shadow-md transition-all duration-300 ${
              currentIndex === sortedExperience.length - 1 
                ? 'opacity-30 cursor-not-allowed text-slate-400' 
                : 'text-slate-600 hover:text-cyan-500 hover:border-cyan-400 hover:shadow-lg'
            }`}
            aria-label="Next slide"
          >
            <i className="fa-solid fa-chevron-right text-sm"></i>
          </button>

        </div>

        {/* Navigation Indicator Pagination Dots */}
        <div className="flex items-center gap-2 mt-6">
          {sortedExperience.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-500' 
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </Section>
  );
};

export default Experience;