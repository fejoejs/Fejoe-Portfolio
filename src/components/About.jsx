import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { personalInfo } from '../portfolioData';
import DownloadButton from './DownloadButton';

const About = () => {
  return (
    <Box 
      component="section" 
      id="about" 
      className="section-container"
      sx={{ mt: '-5px', pt: { xs: '45px !important', sm: '100px' } }}
    >
      <Box
        component={motion.h2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
        sx={{
          fontSize: { xs: '1.5rem', sm: '1rem' },
          mb: { xs: '0.25rem', sm: '1.5rem' },
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: 'primary.main',
          fontFamily: 'var(--font-mono)'
        }}
      >
        ABOUT ME
      </Box>

      <Box 
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '45% 1fr' },
          gap: { xs: '1.5rem', sm: '3.5rem', lg: '6rem' },
          alignItems: 'stretch',
        }}
      >
        
        {/* Left Side */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <Typography 
            variant="h3" 
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.25rem' },
              lineHeight: { xs: 1.25, sm: 1.3 },
              fontWeight: 700,
              mb: { xs: '1rem', sm: '2rem' },
              color: 'text.primary'
            }}
          >
            Building with curiosity.<br/>Creating with purpose.
          </Typography>
          
          <Box 
            className="about-text" 
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              color: 'text.secondary',
              lineHeight: { xs: 1.5, sm: 1.7 },
              mb: '2.5rem',
            }}
          >
            <Typography sx={{ mb: { xs: '1rem', sm: '1.25rem' }, fontSize: 'inherit', lineHeight: 'inherit' }}>
              I'm {personalInfo.name}, an aspiring Full Stack Developer interested in building modern web applications and solving real-world problems through technology.
            </Typography>
            <Typography sx={{ mb: { xs: '1rem', sm: '1.25rem' }, fontSize: 'inherit', lineHeight: 'inherit' }}>
              I enjoy working across the development process - from responsive interfaces to application logic and databases.
            </Typography>
          </Box>

          <Box sx={{ mb: '2rem', display: 'flex', justifyContent: 'flex-start' }}>
            <DownloadButton href={personalInfo.resumeUrl} text="View Resume" hideTooltip={true} />
          </Box>
        </Box>

        {/* Right Side */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          sx={{
            position: 'relative',
            pt: { xs: 0, sm: '2rem' },
            mt: { xs: 0, sm: 'auto' },
            px: { xs: 0, sm: 'auto' },
          }}
        >
          <Typography 
            component="h2"
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: '2px',
              color: 'primary.main',
              mb: '1.5rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            MY APPROACH
          </Typography>
          
          <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', zIndex: 1 }}>
            
            {[
              { num: '01', title: 'LEARN', desc: 'I continuously strengthen my development fundamentals through projects, internships, and hands-on learning.' },
              { num: '02', title: 'BUILD', desc: 'I enjoy transforming ideas into functional, responsive applications with clean interfaces and practical solutions.' },
              { num: '03', title: 'IMPROVE', desc: 'I approach every project as an opportunity to solve problems, learn, and improve the final experience.' }
            ].map((item, index, arr) => (
              <Box key={item.num} sx={{ display: 'flex', gap: { xs: '1.5rem', sm: '2rem' }, alignItems: 'stretch' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '6px', flexShrink: 0 }}>
                  <Box sx={{ 
                    width: '14px', height: '14px', borderRadius: '50%', 
                    bgcolor: 'primary.main', boxShadow: '0 0 12px rgba(0, 217, 255, 0.6)', 
                    flexShrink: 0, zIndex: 2 
                  }} />
                  {index !== arr.length - 1 && (
                    <Box sx={{
                      width: '2px', flexGrow: 1, mt: '8px', mb: '-10px', zIndex: 1,
                      background: 'linear-gradient(to bottom, rgba(0, 217, 255, 0.5), rgba(0, 217, 255, 0.1))'
                    }} />
                  )}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', pb: { xs: index === arr.length - 1 ? 0 : '2rem', sm: index === arr.length - 1 ? 0 : '3rem' } }}>
                  <Typography variant="h4" sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, fontWeight: 700, color: 'text.primary', letterSpacing: '1px' }}>
                    <Box component="span" sx={{ color: 'primary.main', mr: '0.5rem', fontFamily: 'var(--font-mono)' }}>{item.num}</Box> {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, lineHeight: 1.6, color: 'text.secondary' }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;


