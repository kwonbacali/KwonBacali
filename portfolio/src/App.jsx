import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import { AnimatePresence } from 'framer-motion'; // Added for preloader exit animations
import './App.css'

import { portfolioData } from './data/portfolioData';

// Shared Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Preloader from './components/Preloader.jsx';

// animations
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';

// Features
import Interests from './features/Interests';
import About from './features/About';
import Skills from './features/Skills';
import Experience from './features/Experience';
import Resume from './features/Resume';
import Projects from './features/Projects';
import Contact from './features/Contact';
import Travels from './features/Travels';

// Single-page scrolling landing core component
const HomeLanding = ({ about, skills, experience }) => {
  const location = useLocation();

  useEffect(() => {
    // Check if we came from a page that passed a target section state
    if (location.state && location.state.scrollToSection) {
      const targetId = location.state.scrollToSection;
      
      // Allow a tiny timeout for the DOM blocks to completely render before calculating positioning
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);

      // Clear the history state so refreshing the homepage later doesn't keep scrolling down automatically
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div data-bs-spy="scroll" data-bs-target="#navbarStandard" data-bs-offset="100">
      {/* Keeping About unwrapped so the hero area is instantly interactive */}
      <About data={about} />
      
      <ScrollReveal>
        <Skills data={skills} />
      </ScrollReveal>
      
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      
      <ScrollReveal>
        <Experience data={experience} />
      </ScrollReveal>
      
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      
      <ScrollReveal>
        <Interests />
      </ScrollReveal>
    </div>
  );
};

function App() {
  const { about, skills, experience } = portfolioData;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Lock scrolling when loading starts
    document.body.style.overflow = 'hidden';

    // 2. Wait for window assets to fully load
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = 'unset'; // 3. Re-enable scrolling
      }, 1200); // 1.2s gives it natural breathing room to look premium
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      {/* 
        AnimatePresence handles tracking components leaving the DOM. 
        We use mode="wait" to ensure exit transitions finish smoothly.
      */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="global-loader" />}
      </AnimatePresence>

      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen">
        <Navbar brand="Kwon Jin Bacali" />
        
        {/* Added a relative container block to prevent accidental flashes behind the loader */}
        <main className="mt-5 flex-grow relative">
          <Routes>
            <Route 
              path="/" 
              element={<HomeLanding about={about} skills={skills} experience={experience} />} 
            />
            <Route 
              path="/travels" 
              element={<Travels />} 
            />
          </Routes>
        </main>

        <Footer brand="Kwon Jin Bacali" />
      </div>
    </Router>
  )
}

export default App;