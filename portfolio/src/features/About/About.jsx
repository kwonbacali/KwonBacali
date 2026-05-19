import React from 'react';
import Section from '../../components/Section';
import styles from './about.module.css';
import profileImg from '../../assets/profile.jpg';
import resumeFile from '../../assets/kwon-bacali.pdf';

const About = ({ data }) => {
  console.log("About Data:", data); 

  return (
    // Replaced bgLight with a dark theme background container
    <Section id="about" bgLight>
      <div className="min-h-[80vh] flex items-center justify-center py-12 text-white">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Side: Floating Text Card */}
          <div className="w-full lg:w-1/1 max-w-xl lg:text-left text-center">
            {/* Keeping your light card base */}
            <div className="rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden bg-slate-50">
              {/* Subtle tech border accent line */}
              <div className="absolute top-0 left-0 w-full h-1 lg:w-1 lg:h-full bg-gradient-to-r from-cyan-500 to-blue-500 lg:bg-gradient-to-b" />
              
              {/* Badge - FIX: Replaced bg-blue-50 with bg-sky-100/70 and border-cyan-800/60 with border-cyan-400/40 */}
              <span className="inline-block px-4 py-1.5 bg-sky-100/70 border border-cyan-400/40 rounded-full text-xs font-semibold text-cyan-600 mb-3">
                Hi, I'm {data?.name || "Kwon Jin"}
              </span>

              {/* Headings */}
              <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-slate-800 leading-tight">
                Fullstack
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-cyan-600 mt-1 mb-4">
                Developer
              </h2>

              {/* Decorative horizontal line beneath the title */}
              <div className="w-17 sm:w-22 mx-auto lg:mx-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6" />

              {/* Summary Text */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light space-y-4">
                {data?.summary || 
                  "Versatile Software Developer with over 6 years of experience across the full web development lifecycle."}
              </p>
            </div>
            
            {/* Call to Actions / Socials Area */}
            <div className="mt-8 flex flex-wrap flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                          
              {/* Download Resume Button */}
              <a 
                href={resumeFile}
                download="Resume - Kwon Jin Bacali.pdf"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-blue-400 text-white font-medium text-sm rounded-full shadow-lg shadow-cyan-950/40 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume/CV
              </a>

              {/* Social & Professional Links Container */}
              <div className="flex items-center gap-3">

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/kwon-bacali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/80 border border-cyan-900/40 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

                {/* JobStreet */}
                <a 
                  href="https://ph.jobstreet.com/profiles/kwonjin-bacali-R02wL8VD3B" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/80 border border-blue-900/40 text-slate-300 hover:text-blue-400 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
                  title="JobStreet"
                >
                  <i className="fa-solid fa-suitcase"></i>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/kwon.bacali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/80 border border-cyan-900/40 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/kwon.bacali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/80 border border-sky-900/40 text-slate-300 hover:text-sky-400 hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>

              </div>
            </div>
          </div>

          {/* Right Side: Circular Glowing Profile Frame */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className={`${styles.glowCircle} relative w-50 h-50 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full p-1.5`}>
              
              {/* Inner Circle wrapper - FIX: Replaced from-emerald-600 with from-blue-600 */}
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-700 flex items-center justify-center relative">
                <img 
                  src={profileImg} 
                  alt={data?.name} 
                  className="w-full h-full object-cover object-top scale-110 transform transition-transform duration-300 filter contrast-105"
                />
              </div>

              {/* Floating Computer Monitor Icon (Top Right) - FIX: Replaced border-slate-700/60 with border-cyan-500/30 */}
              <div className={`${styles.floatingIconOne} absolute -top-4 -right-4 md:top-1/4 md:-right-8 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 p-2.5 rounded-xl text-cyan-400 shadow-xl hidden sm:block`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Floating Code/Terminal Icon (Bottom Left) - FIX: Replaced text-emerald-400 with text-sky-400, and border-slate-700/60 with border-blue-500/30 */}
              <div className={`${styles.floatingIconTwo} absolute -bottom-4 -left-4 md:bottom-12 md:-left-8 bg-slate-900/80 backdrop-blur-sm border border-blue-500/30 p-2.5 rounded-xl text-sky-400 shadow-xl hidden sm:block`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default About;