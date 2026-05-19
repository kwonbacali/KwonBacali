import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Data structured as arrays of images per trip/location
const TRAVEL_DATA = [
  {
    id: 1,
    location: 'Aurora',
    route: 'Aurora Ride',
    date: '2025',
    images: [
      '/images/travels/aurora-1.jpg',
      '/images/travels/aurora-2.jpg',
      '/images/travels/aurora-3.jpg'
    ]
  },
  {
    id: 2,
    location: 'Boracay',
    route: 'Unwind to an Island Paradise',
    date: '2026',
    images: [
      '/images/travels/boracay-1.jpg',
      '/images/travels/boracay-2.jpg',
      '/images/travels/boracay-3.jpg',
      '/images/travels/boracay-4.jpg',
      '/images/travels/boracay-5.jpg',
      '/images/travels/boracay-6.jpg',
    ]
  },
  {
    id: 3,
    location: 'Quezon - Cagbalete',
    route: 'Island Hopping & Coastal Ride',
    date: '2025',
    images: [
      '/images/travels/cagbalete-1.jpg',
      '/images/travels/cagbalete-2.jpg',
      '/images/travels/cagbalete-3.jpg'
    ]
  },
  {
    id: 4,
    location: 'La Union',
    route: 'Long Ride to the Surfing Capital',
    date: '2026',
    images: [
      '/images/travels/la-union-1.jpg',
      '/images/travels/la-union-2.jpg',
      '/images/travels/la-union-3.jpg'
    ]
  },
  {
    id: 5,
    location: 'Marinduque',
    route: 'Marinduque Loop Ride & Island Hopping',
    date: '2026',
    images: [
      '/images/travels/marinduque-loop-1.jpg',
      '/images/travels/marinduque-loop-2.jpg',
      '/images/travels/marinduque-loop-3.jpg',
      '/images/travels/marinduque-loop-4.jpg',
      '/images/travels/marinduque-loop-5.jpg',
      '/images/travels/marinduque-loop-6.jpg',
    ]
  },
  {
    id: 6,
    location: 'Palawan',
    route: 'Palawan Coastal Ride & Island Hopping',
    date: '2025',
    images: [
      '/images/travels/palawan-1.jpg',
      '/images/travels/palawan-2.jpg',
      '/images/travels/palawan-3.jpg',
      '/images/travels/palawan-4.jpg',
      '/images/travels/palawan-5.jpg',
      '/images/travels/palawan-6.JPG',
      '/images/travels/palawan-7.jpg',
    ]
  }
];

// Reusable Sub-Component for localized image rendering
const TrackedImage = ({ src, alt, className, style, loading }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset loading state if src changes (crucial for lightbox switches)
  React.useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-slate-900/10">
      {/* Local Buffer Spinner Animation Layer */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 backdrop-blur-[2px]">
          <div className="w-5 h-5 border-2 border-slate-400 border-t-cyan-500 rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={src}
        alt={alt || ""}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={style}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

const Travels = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Lightbox Modal States
  const [isOpen, setIsOpen] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Extract unique locations dynamically for your top filter bar
  const locations = useMemo(() => {
    return ['All', ...new Set(TRAVEL_DATA.map(item => item.location))];
  }, []);

  // Filter albums based on state selection
  const filteredAlbums = useMemo(() => {
    if (activeFilter === 'All') return TRAVEL_DATA;
    return TRAVEL_DATA.filter(item => item.location === activeFilter);
  }, [activeFilter]);

  // Open popup handler
  const openLightbox = (album, index = 0) => {
    setActiveAlbum(album);
    setSelectedImageIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Lock background body scroll
  };

  // Close popup handler
  const closeLightbox = () => {
    setIsOpen(false);
    setActiveAlbum(null);
    document.body.style.overflow = 'unset'; // Restore scroll
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-50 border-b border-slate-200 text-slate-800 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Navigation Bar Link */}
        <Link 
          to="/" 
          state={{ scrollToSection: 'interests' }}
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-500 transition mb-6 group"
        >
          <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i> Back to Portfolio
        </Link>

        {/* Dynamic Section Header Card */}
        <div className="bg-white/70 backdrop-blur-md border border-cyan-500/10 rounded-2xl p-6 mb-12 shadow-sm">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800 mb-2">Travel Logs & Routes</h1>
          <p className="text-sm text-slate-500 font-light">Documenting exploration routes across the Philippines on two wheels.</p>
        </div>

        {/* Dynamic Location Filter Row */}
        <div className="flex flex-wrap gap-2 mb-16">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveFilter(loc)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 shadow-sm ${
                activeFilter === loc
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-cyan-400'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Photo Deck Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 pt-4">
          {filteredAlbums.map((album) => (
            <div key={album.id} className="flex flex-col items-center">
              
              {/* Stacked Stack Viewport Deck Trigger Click */}
              <button 
                onClick={() => openLightbox(album, 0)}
                className="relative w-full aspect-[4/3] group text-left cursor-pointer focus:outline-none"
              >
                {/* Deck Card 3 (Bottom Stack) */}
                {album.images[2] && (
                  <div className="absolute inset-0 transform translate-y-4 scale-[0.90] rotate-3 opacity-40 bg-slate-200 rounded-2xl shadow-md border border-white overflow-hidden transition-transform duration-300 group-hover:translate-y-6 group-hover:rotate-6">
                    <TrackedImage src={album.images[2]} className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Deck Card 2 (Middle Stack) */}
                {album.images[1] && (
                  <div className="absolute inset-0 transform translate-y-2 scale-[0.95] -rotate-2 opacity-70 bg-slate-200 rounded-2xl shadow-lg border border-white overflow-hidden transition-transform duration-300 group-hover:translate-y-3 group-hover:-rotate-4">
                    <TrackedImage src={album.images[1]} className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Deck Card 1 (Top Hero Stack) */}
                <div className="absolute inset-0 transform bg-slate-300 rounded-2xl shadow-xl border-2 border-white overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                  <TrackedImage 
                    src={album.images[0]} 
                    alt={album.route} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Floating Multi-Counter badge */}
                  <span className="absolute bottom-3 right-3 bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 z-10">
                    <i className="fa-regular fa-images"></i> {album.images.length}
                  </span>
                </div>
              </button>

              {/* Album Text Card Credits */}
              <div className="w-full mt-6 px-2 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1">
                    <i className="fa-solid fa-location-dot text-cyan-500 text-xs"></i> {album.location}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-medium">{album.date}</span>
                </div>
                <p className="text-xs text-slate-500 font-light">{album.route}</p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* PHOTO POPUP VIEWER MODAL LIGHTBOX                                         */}
      {/* ========================================================================= */}
      {isOpen && activeAlbum && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4 transition-opacity duration-300">
          
          {/* Modal Header Panel Control Layer */}
          <div className="w-full flex items-center justify-between text-white py-2 px-4">
            <div>
              <h2 className="text-base font-bold flex items-center gap-1.5">
                <i className="fa-solid fa-location-dot text-cyan-400 text-sm"></i> {activeAlbum.location}
              </h2>
              <p className="text-xs text-slate-400 font-light">{activeAlbum.route} ({selectedImageIndex + 1} of {activeAlbum.images.length})</p>
            </div>
            
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-lg transition duration-200"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Core Central Main Viewport Layer */}
          <div className="relative flex-grow flex items-center justify-center max-h-[70vh]">
            {/* Previous Arrow Selection */}
            {selectedImageIndex > 0 && (
              <button 
                onClick={() => setSelectedImageIndex(prev => prev - 1)}
                className="absolute left-2 sm:left-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            )}

            {/* Main Central View Image with isolated loader */}
            <div className="max-w-full max-h-full w-[80vw] h-[60vh]">
              <TrackedImage 
                src={activeAlbum.images[selectedImageIndex]} 
                alt="Expanded viewport log" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in mx-auto"
              />
            </div>

            {/* Next Arrow Selection */}
            {selectedImageIndex < activeAlbum.images.length - 1 && (
              <button 
                onClick={() => setSelectedImageIndex(prev => prev + 1)}
                className="absolute right-2 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            )}
          </div>

          {/* Modal Bottom Gallery Slideshow Bar Matrix */}
          <div className="w-full max-w-3xl mx-auto py-4 overflow-x-auto custom-scrollbar flex items-center justify-center gap-2 px-4">
            {activeAlbum.images.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative h-14 aspect-square rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 border-2 ${
                  selectedImageIndex === idx 
                    ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-500/20 opacity-100' 
                    : 'border-transparent opacity-40 hover:opacity-70'
                }`}
              >
                <TrackedImage src={imgUrl} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default Travels;