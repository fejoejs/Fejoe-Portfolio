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
  return (
    <>
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 0, 
        pointerEvents: 'none',
        maskImage: 'radial-gradient(circle at center, transparent 20%, black 100%)',
        WebkitMaskImage: 'radial-gradient(circle at center, transparent 20%, black 100%)'
      }}>
        <Particles
          particleColors={['#00D9FF', '#6C2BFF', '#ffffff']}
          particleCount={600}
          particleSpread={20}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
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
