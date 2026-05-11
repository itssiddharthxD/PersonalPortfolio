import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import AboutSection from './sections/AboutSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const panelOrder = ['home', 'projects', 'skills', 'about', 'contact'];

function App() {
  const [activePanel, setActivePanel] = useState('home');
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  const navigateTo = (panel) => {
    const currentIdx = panelOrder.indexOf(activePanel);
    const nextIdx = panelOrder.indexOf(panel);
    setDirection(nextIdx > currentIdx ? 1 : -1);
    setActivePanel(panel);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      zIndex: 0
    })
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] flex flex-col paper-texture selection:bg-orange-200">
      <Navbar activePanel={activePanel} onNavigate={navigateTo} />
      
      {/* 
        To fix scaling: 
        We use a relative container for the main content.
        The AnimatePresence will handle the absolute positioning of the exiting element.
        We ensure the container has a minimum height to prevent layout jumps.
      */}
      <main className="flex-grow relative mt-24 pb-20 overflow-x-hidden">
        <div className="container-custom">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={activePanel}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="w-full bg-[#fdfaf5] min-h-[60vh]"
            >
              {activePanel === 'home' && <Hero onNavigate={navigateTo} />}
              {activePanel === 'projects' && <ProjectsSection />}
              {activePanel === 'skills' && <SkillsSection />}
              {activePanel === 'about' && <AboutSection />}
              {activePanel === 'contact' && <Contact />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
