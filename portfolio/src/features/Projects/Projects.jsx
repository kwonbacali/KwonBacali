import React, { useState } from 'react';
import Section from '../../components/Section';
import projectVideo from '../../assets/victory-unleashed-video-story.mp4';
import projectImage from '../../assets/victory-unleashed-background.png';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Example asset states - replace strings with your actual paths
  // const projectVideo = "/assets/victory-unleashed-video-story.mp4"; 
  const projectTech = ["PHP (CodeIgniter 4)", "Bootstrap", "MySQL", "ECharts", "Chart.js"];

  return (
    <Section id="projects">
      {/* Header Title Card */}
      <div className="relative w-full max-w-2xl bg-white/70 backdrop-blur-md border border-cyan-500/10 shadow-[0_4px_24px_rgba(8,145,178,0.04)] rounded-2xl p-6 text-center mb-12 mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
          Featured Project
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-3" />
        <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
          An in-depth look into a custom-built production application, system architecture, and core engineering details.
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto items-center bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
          
        {/* INITIAL VIEW: Split Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Side: Media Showcase (Video/Image) */}
          <div className="lg:col-span-5 bg-slate-900 flex items-center justify-center relative aspect-video lg:aspect-auto min-h-[250px] lg:min-h-[300px]">
            {/* Using a video player, fallback to image if needed */}
            <video 
              src={projectVideo} 
              controls
              playsInline
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
          </div>

          {/* Right Side: Minimal High-Level Info */}
          <div className="lg:col-span-7 p-6 md:p-8 lg:p-10 flex flex-col justify-between items-start text-left relative overflow-hidden rounded-r-2xl bg-blue-950">
            {/* 1. Background Image Layer - Adjust opacity (e.g., opacity-10 or opacity-15) to keep text readable */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50 pointer-events-none mix-blend-overlay"
              style={{ 
                backgroundImage: `url(${projectImage})` // Replace this with your image path or import
              }} 
            />

            {/* 2. Dark Gradient Tint - Anchors contrast so white text always pops */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent pointer-events-none" />

            {/* 3. Text Content - Wrapped in relative z-10 to float perfectly on top */}
            <div className="w-full relative z-10">
              <div className="flex items-center gap-2 mb-3">
                {/* Tweaked badge style to match dark contrast theme */}
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-400/20 px-2.5 py-1 rounded-full">
                  Internal ERP / Production System
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                BLACKTWENTY Workflow Management System
              </h3>
              
              {/* Tweaked text color slightly to slate-300 for premium legibility over image */}
              <p className="text-slate-300 leading-relaxed font-light mb-6 text-sm md:text-base">
                Architected and deployed a custom internal workflow and enterprise resource planning system from scratch. Designed to streamline job orders, monitor employee productivity, and handle high-concurrency database tracking for our family sports apparel brand.
              </p>

              {/* Tech Badges - Updated borders and colors to fit the dark aesthetic */}
              <div className="flex flex-wrap gap-2 mb-8">
                {projectTech.map((tech, idx) => (
                  <span key={idx} className="text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/50 px-3 py-1 rounded-md backdrop-blur-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Action Buttons - Wrapped in relative z-10 with matching updated border divider */}
            <div className="flex flex-wrap items-center gap-4 w-full pt-4 border-t border-slate-800 relative z-10">
              <button 
                onClick={() => setIsOpen(true)}
                className="px-5 py-2.5 bg-cyan-600 text-white rounded-xl text-sm font-medium hover:bg-cyan-500 transition shadow-lg shadow-cyan-950/20"
              >
                View Full Technical Case Study
              </button>
              <a 
                href="https://blacktwentyofficial.com" 
                target="_blank" 
                rel="noreferrer" 
                className="px-5 py-2.5 bg-slate-800/80 text-slate-200 border border-slate-700/80 rounded-xl text-sm font-medium hover:bg-slate-700 transition backdrop-blur-xs"
              >
                Launch System App <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* DETAILED EXPANDED VIEW (Modal Approach) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative text-left">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
              <h4 className="font-bold text-slate-800 text-lg">Case Study: BLACKTWENTY ERP</h4>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-50 transition"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-8">
              
              {/* Engineering Highlights Section */}
              <div>
                <h5 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-layer-group text-cyan-500"></i> Core Contributions
                </h5>
                <ul className="text-slate-600 text-sm md:text-base leading-relaxed font-light space-y-4 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1.5 text-xs flex-shrink-0"><i className="fa-solid fa-caret-right"></i></span>
                    <span><strong className="font-semibold text-slate-800">End-to-End Development:</strong> Handled system layout, database engineering, and DevOps tracking routines to keep production stable.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1.5 text-xs flex-shrink-0"><i className="fa-solid fa-caret-right"></i></span>
                    <span><strong className="font-semibold text-slate-800">Data Visualization:</strong> Integrated Chart.js and ECharts to construct custom analytic pipelines displaying worker speed and order backlogs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1.5 text-xs flex-shrink-0"><i className="fa-solid fa-caret-right"></i></span>
                    <span><strong className="font-semibold text-slate-800">Server Lifecycle:</strong> Configured web server routing, database structural index scaling, and 99.9% uptime validation procedures.</span>
                  </li>
                </ul>
              </div>

              {/* BRAND PROMOTION BANNER (Your Shareholder Shoutout) */}
              <div className="p-5 md:p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 rounded-xl text-white relative overflow-hidden shadow-inner">
                <div className="absolute right-0 bottom-0 opacity-10 translate-x-10 translate-y-10 scale-150 pointer-events-none">
                  <i className="fa-solid fa-shirt text-[120px]"></i>
                </div>
                
                <div className="relative z-10 max-w-xl">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded mb-3 inline-block">
                    Our Brand
                  </span>
                  <h6 className="text-lg font-bold mb-1 tracking-wide">
                    Looking for High-Performance Team Uniforms?
                  </h6>
                  <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed mb-4">
                    Beyond writing the software backend, I am proud to hold a share and stake in BLACKTWENTY Sports Apparel. We engineer top-tier customized athletic uniforms and apparel configurations for local organizations and professional teams alike.
                  </p>
                  <a 
                    href="https://www.facebook.com/blacktwentysports" // Update with your actual brand storefront link
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold bg-white text-slate-950 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition shadow-md"
                  >
                    Message Blacktwenty Apparel <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}
    </Section>
  );
};

export default Projects;