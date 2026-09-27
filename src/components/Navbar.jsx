import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Box, IconButton, Link } from '@mui/material';
import { personalInfo } from '../portfolioData';
import GradientButton from './GradientButton';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Experience', href: '#experience' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href === '#home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#home');
    }
    setMobileMenuOpen(false);
  };

  return (
    <Box
      component={motion.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
        py: scrolled ? '1rem' : '1.5rem',
        transition: 'all 0.3s ease',
      }}
    >
      <Box
        sx={{
          width: { xs: 'calc(100% - 40px)', md: '90%' },
          maxWidth: '1400px', mx: 'auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          px: { xs: '1rem', sm: '1.5rem' }, py: { xs: '0.6rem', sm: '0.75rem' },
          bgcolor: scrolled ? 'rgba(12, 17, 27, 0.85)' : 'rgba(12, 17, 27, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid',
          borderColor: scrolled ? 'rgba(0, 217, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
          borderRadius: '99px',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 217, 255, 0.05)' : '0 4px 30px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          position: 'relative',
          zIndex: 50,
        }}
      >
        <Link 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'text.primary', textDecoration: 'none' }}
        >
          {personalInfo.name}
        </Link>
        
        <Box sx={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                sx={{
                  fontSize: '0.9rem', color: 'text.secondary', fontWeight: 500, textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: 'text.primary' }
                }}
              >
                {link.name}
              </Link>
            ))}
            <GradientButton as="a" href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
              Let's Connect
            </GradientButton>
          </Box>

          <IconButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{ display: { xs: 'block', md: 'none' }, color: 'text.primary' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </IconButton>
        </Box>
      </Box>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            sx={{
              position: 'absolute', top: 'calc(100% + 0.5rem)', right: '20px', left: 'auto',
              width: '220px', bgcolor: 'rgba(12, 17, 27, 0.95)', backdropFilter: 'blur(16px)',
              border: '1px solid rgba(0, 217, 255, 0.15)', borderRadius: '16px', p: '1.25rem',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 217, 255, 0.1)',
              zIndex: 40, transformOrigin: 'top right'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                sx={{
                  width: '100%', color: 'text.secondary', textAlign: 'center', fontSize: '1rem',
                  p: '0.6rem', borderRadius: '8px', fontWeight: 500, transition: 'all 0.2s ease', textDecoration: 'none',
                  '&:hover': { bgcolor: 'rgba(0, 217, 255, 0.05)', color: 'primary.main' }
                }}
              >
                {link.name}
              </Link>
            ))}
            <Box sx={{ mt: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <GradientButton as="a" href="#contact" onClick={(e) => handleNavClick(e, '#contact')} style={{ minWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                Let's Connect
              </GradientButton>
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;


