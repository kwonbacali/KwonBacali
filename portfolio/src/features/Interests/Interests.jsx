import React from 'react';
import Section from '../../components/Section';
import { Link } from 'react-router-dom';

const Interests = ({ data }) => {

  return (
    <Section id="interests" className="scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Header Title Card consistent with your Featured Projects & Contact sections */}
        <div className="relative w-full max-w-2xl bg-white/70 backdrop-blur-md border border-cyan-500/10 shadow-[0_4px_24px_rgba(8,145,178,0.04)] rounded-2xl p-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">Interests</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-3" />
          <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
            A glimpse into what inspires me, keeps me driven, and captures my curiosity outside of engineering.
          </p>
        </div>

        {/* Dual Split Layout Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: The Explorer (Motorcycle & Travels) */}
          <div className="bg-white/70 backdrop-blur-md border border-slate-100 hover:border-cyan-400/30 rounded-3xl p-6 md:p-8 shadow-2xl shadow-slate-100/60 hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-motorcycle text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">The Explorer</h3>
                  <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Rides & Destinations</p>
                </div>
              </div>
              
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                When I'm away from my IDE, I hit the road on two wheels to explore scenic routes, chart new destinations, and document map locations. It's my ultimate way to reset and find fresh perspectives.
              </p>

              {/* Interactive Route Badges / Map placeholder concept */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-medium rounded-full flex items-center gap-1.5 shadow-sm">
                  <i className="fa-solid fa-location-crosshairs text-[10px]"></i> Cavite Base
                </span>
                <span className="px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 text-xs font-light rounded-full flex items-center gap-1.5">
                  <i className="fa-solid fa-arrow-right text-[10px] text-slate-400"></i> Batangas Loop
                </span>
                <span className="px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 text-xs font-light rounded-full flex items-center gap-1.5">
                  <i className="fa-solid fa-arrow-right text-[10px] text-slate-400"></i> Tagaytay Ridges
                </span>
              </div>
            </div>

            {/* Micro-Interaction Image Gallery Triggers */}
            <Link 
              to="/travels" 
              className="mt-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 flex items-center justify-between hover:bg-cyan-50/20 transition-colors duration-300 w-full text-left group"
            >
              <div className="flex items-center gap-2">
                <i className="fa-regular fa-images text-cyan-500 text-base"></i>
                <span className="text-xs font-medium text-slate-600">Travel logs, routes & photography</span>
              </div>
              <span className="text-xs text-cyan-500 font-semibold group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                View Photos <i className="fa-solid fa-chevron-right text-[10px]"></i>
              </span>
            </Link>
          </div>

          {/* Card 2: Strategic Gaming (The Competitive Mindset) */}
          <div className="bg-white/70 backdrop-blur-md border border-slate-100 hover:border-blue-400/30 rounded-3xl p-6 md:p-8 shadow-2xl shadow-slate-100/60 hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-gamepad text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Gaming Culture</h3>
                  <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Mechanics & Strategy</p>
                </div>
              </div>
              
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                Gaming keeps my problem-solving loops sharp. Whether coordinating complex team rotations, analyzing tactical positions, or breaking down game systems, I thrive on deep mechanics and execution.
              </p>

              {/* Game Platforms Matrix Grid with Branding Logos */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-0 max-w-sm mx-auto sm:mx-0 w-full">
                
                {/* Genshin Impact Card */}
                <div className="w-20 h-20 relative aspect-square border border-slate-100 bg-white shadow-sm flex items-center justify-center cursor-default group/game overflow-hidden hover:border-amber-400/40 hover:shadow-lg transition-all duration-300">
                  {/* Dynamic Branding Logo (Scales up on hover) */}
                  <div className="w-20 h-20 bg-slate-100 overflow-hidden flex items-center justify-center group-hover/game:scale-110 transition-transform duration-300 select-none">
                    <img 
                      src="images/logos/genshin-impact.png"
                      alt="Genshin Impact Logo" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Animated Tooltip Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-medium text-center py-1.5 translate-y-full group-hover/game:translate-y-0 transition-transform duration-300 pointer-events-none tracking-wide">
                    Genshin Impact
                  </div>
                </div>

                {/* Mobile Legends Tag */}
                <div className="w-20 h-20 relative aspect-square border border-slate-100 bg-white shadow-sm flex items-center justify-center cursor-default group/game overflow-hidden hover:border-blue-400/40 hover:shadow-lg transition-all duration-300">
                  {/* Dynamic Branding Logo (Scales up on hover) */}
                  <div className="w-20 h-20 bg-slate-100 overflow-hidden flex items-center justify-center group-hover/game:scale-110 transition-transform duration-300 select-none">
                    <img 
                      src="images/logos/mobile-legends.png" 
                      alt="Mobile Legends Logo" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Animated Tooltip Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-medium text-center py-1.5 translate-y-full group-hover/game:translate-y-0 transition-transform duration-300 pointer-events-none tracking-wide">
                    MLBB
                  </div>
                </div>

                {/* Valorant Tag */}
                <div className="w-20 h-20 relative aspect-square border border-slate-100 bg-white shadow-sm flex items-center justify-center cursor-default group/game overflow-hidden hover:border-rose-400/40 hover:shadow-lg transition-all duration-300">
                  {/* Dynamic Branding Logo (Scales up on hover) */}
                  <div className="w-20 h-20 bg-slate-100 overflow-hidden flex items-center justify-center group-hover/game:scale-110 transition-transform duration-300 select-none">
                    <img 
                      src="images/logos/valorant.png" 
                      alt="Valorant Logo" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Animated Tooltip Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-medium text-center py-1.5 translate-y-full group-hover/game:translate-y-0 transition-transform duration-300 pointer-events-none tracking-wide">
                    Valorant
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Status Subtext alignment */}
            <div className="mt-6 text-right text-[11px] text-slate-400 font-light italic">
              Always up for a quick casual match or team theorycrafting sessions.
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
};

export default Interests;