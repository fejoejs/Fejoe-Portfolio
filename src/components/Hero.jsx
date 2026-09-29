import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Link, Stack } from '@mui/material';
import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { personalInfo } from '../portfolioData';
import MoltenMetal from './MoltenMetal';
import GradientButton from './GradientButton';
import DownloadButton from './DownloadButton';

const PROFILE_IMAGE_URL = "/images/home.png";

const Hero = () => {
  return (
    <Box 
      component="section" 
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: { xs: 'flex-start', md: 'center' },
        pt: { xs: '90px', md: '160px' },
        pb: { xs: '30px', md: '60px' },
        bgcolor: 'background.default',
        zIndex: 2,
      }}
    >
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <MoltenMetal color1="#070A12" color2="#6C2BFF" color3="#00D9FF" colorMode="molten" />
        <Box sx={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, transparent 0%, var(--bg-primary) 100%), rgba(7, 10, 18, 0.4)',
          zIndex: 1
        }} />
      </Box>

      <Box 
        className="section-container"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          alignItems: 'center',
          gap: { xs: '1rem', md: '4rem' },
          zIndex: 2,
          transform: 'translateY(-10px)',
          textAlign: { xs: 'center', md: 'left' },
          pt: { xs: '1rem', md: 0 },
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '0.75rem', md: '1.25rem' },
            alignItems: { xs: 'center', md: 'flex-start' },
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography sx={{ letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 600, color: 'primary.main', fontFamily: 'var(--font-mono)' }}>
            {personalInfo.role.toUpperCase()}
          </Typography>
          <Typography variant="h1" className="hero-title" sx={{ fontSize: { xs: '1.8rem', sm: '3rem', md: '4rem' }, fontWeight: 800, lineHeight: 1.1, m: 0 }}>
            Hi, I'm <Box component="span" sx={{ color: 'secondary.main' }}>Fejoe J S</Box>
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' }, fontWeight: 600, lineHeight: 1.3, color: 'text.primary', m: 0 }}>
            Turning ideas into meaningful digital experiences.
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, maxWidth: '500px', lineHeight: 1.6, color: 'text.secondary', m: { xs: '0 auto', md: 0 } }}>
            I'm a Full Stack Developer passionate about transforming ideas and real-world problems into responsive, functional, and user-focused applications.
          </Typography>

          <Box 
            className="hero-actions"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: '1rem',
              mt: '1rem',
              width: { xs: '100%', sm: 'auto' },
              '& > *': { width: { xs: '100%', sm: 'auto' } },
              '& .download-btn-container': { width: { xs: '100%', sm: 'auto' }, display: { xs: 'block', sm: 'inline-block' } },
              '& .download-button': { '--width': { xs: '100%', sm: '180px' }, width: { xs: '100%', sm: '180px' } }
            }}
          >
            <GradientButton as="a" href="#projects" hoverOnly={true}>View My Projects</GradientButton>
            <DownloadButton href={personalInfo.resumeUrl} text="Download Resume" hideTooltip={true} />
          </Box>

          <Stack direction="row" spacing="1rem" sx={{ mt: { xs: '0.5rem', md: '1.5rem' } }}>
            {[
              { href: personalInfo.linkedin, icon: <Linkedin size={20} /> },
              { href: personalInfo.github, icon: <Github size={20} /> },
              { href: `mailto:${personalInfo.email}`, icon: <Mail size={20} /> },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                sx={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '40px', height: '40px', borderRadius: '50%',
                  bgcolor: 'rgba(255, 255, 255, 0.05)', color: 'text.secondary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: 'primary.main',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                {social.icon}
              </Link>
            ))}
          </Stack>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'center',
            pr: { xs: 0, md: '2rem' },
            mb: { xs: '1rem', md: 0 },
            order: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              width: { xs: '160px', sm: '280px', md: '350px' },
              height: { xs: '160px', sm: '280px', md: '350px' },
              borderRadius: '16px',
              p: '4px',
              position: 'relative',
              zIndex: 1,
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 0 30px rgba(0, 217, 255, 0.25), 0 0 15px rgba(108, 43, 255, 0.3)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-50%', left: '-50%', width: '200%', height: '200%',
                background: 'conic-gradient(transparent 0deg, var(--accent-cyan) 90deg, transparent 180deg, var(--accent-purple) 270deg, transparent 360deg)',
                animation: 'rotate-ring 8s linear infinite',
                zIndex: 0,
              },
              '@keyframes rotate-ring': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' }
              }
            }}
          >
            <Box
              component="img"
              src={PROFILE_IMAGE_URL}
              alt="Fejoe J S"
              sx={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover', bgcolor: 'background.default', position: 'relative', zIndex: 2 }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

