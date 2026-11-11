import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publication from './components/Publication';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0, 
        pointerEvents: 'none',
      }}>
        <Particles
          particleColors={['#00D9FF', '#6C2BFF']}
          particleCount={isMobile ? 50 : 120}
          particleSpread={15}
          speed={0.15}
          particleBaseSize={8}
          moveParticlesOnHover={!isMobile}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <Navbar />
      <Hero />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <About />
        <Skills />
        <Projects />
        <Publication />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
