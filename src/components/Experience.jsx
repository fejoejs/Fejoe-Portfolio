import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Box, Typography } from '@mui/material';
import { experience } from '../portfolioData';
import SpecularButton from './SpecularButton';

const Experience = () => {
  return (
    <Box 
      component="section" 
      id="experience" 
      className="section-container"
      sx={{ pt: { xs: '45px !important', sm: '100px' } }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        sx={{ mb: '3rem' }}
      >
        <Typography 
          component="h2" 
          className="section-title"
          sx={{
            fontSize: { xs: '1.5rem', sm: '1rem' },
            mb: { xs: '2rem', sm: '1.5rem' },
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'primary.main',
            fontFamily: 'var(--font-mono)'
          }}
        >
          Experience
        </Typography>
      </Box>

      <Box 
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr', lg: 'repeat(2, 1fr)' },
          gap: '2rem',
          maxWidth: { xs: '600px', lg: '1200px' },
          mx: 'auto'
        }}
      >
        {experience.map((exp, idx) => (
          <Box
            component={motion.div}
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="exp-modern-card"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '20px',
              padding: { xs: '1.5rem', sm: '2.5rem' },
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              position: 'relative',
              overflow: 'hidden',
              height: '100%',
              '&:hover': {
                transform: 'translateX(10px)',
                boxShadow: '-10px 20px 40px -10px rgba(108, 43, 255, 0.15), 0 10px 20px -10px rgba(0, 217, 255, 0.1)',
                borderColor: 'rgba(108, 43, 255, 0.3)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--accent-purple), var(--accent-cyan), transparent)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                zIndex: 20,
              },
              '&:hover::before': {
                opacity: 1,
              }
            }}
          >
            <Box 
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '48px 1fr auto', sm: '50px 1fr auto' },
                gap: { xs: '0.25rem 1rem', sm: '0.25rem 1.5rem' },
                alignItems: 'center',
                mb: '1.5rem'
              }}
            >
              <Box 
                sx={{
                  gridColumn: '1 / 2',
                  gridRow: { xs: '1 / 2', sm: '1 / 3' },
                  width: { xs: '48px', sm: '50px' },
                  height: { xs: '48px', sm: '50px' },
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  m: 0
                }}
              >
                <img src={exp.logoUrl} alt={`${exp.company} logo`} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
              </Box>

              <Typography 
                sx={{
                  gridColumn: { xs: '2 / 4', sm: '2 / 3' },
                  gridRow: '1 / 2',
                  fontSize: { xs: '1.15rem', sm: '1.05rem' },
                  fontWeight: 700,
                  color: 'primary.main',
                  letterSpacing: '0.5px',
                  m: 0
                }}
              >
                {exp.company}
              </Typography>

              <Typography 
                component="h3"
                sx={{
                  gridColumn: { xs: '1 / 3', sm: '2 / 3' },
                  gridRow: '2 / 3',
                  fontSize: { xs: '1rem', sm: '1.05rem' },
                  fontWeight: 500,
                  color: 'text.primary',
                  whiteSpace: 'normal',
                  m: 0,
                  mt: { xs: '0.5rem', sm: 0 },
                  lineHeight: { xs: 1.2, sm: 1.3 }
                }}
              >
                {exp.role}
              </Typography>

              <Box 
                component="span"
                sx={{
                  gridColumn: '3 / 4',
                  gridRow: { xs: '2 / 3', sm: '1 / 2' },
                  justifySelf: 'end',
                  alignSelf: { xs: 'auto', sm: 'center' },
                  mt: { xs: '0.5rem', sm: 0 },
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.6rem',
                  background: 'rgba(108, 43, 255, 0.15)',
                  border: '1px solid rgba(108, 43, 255, 0.3)',
                  borderRadius: '4px',
                  color: 'secondary.main',
                  letterSpacing: '1px'
                }}
              >
                {exp.status}
              </Box>

              <Typography 
                className="font-mono"
                sx={{
                  gridColumn: { xs: '1 / 4', sm: '3 / 4' },
                  gridRow: { xs: '3 / 4', sm: '2 / 3' },
                  justifySelf: { xs: 'auto', sm: 'end' },
                  mt: { xs: '0.25rem', sm: 0 },
                  fontSize: '0.85rem',
                  color: 'text.secondary'
                }}
              >
                {exp.period}
              </Typography>
            </Box>
            
            <Box 
              sx={{
                height: '1px',
                width: '100%',
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), transparent)',
                mb: { xs: '2rem', sm: '1.5rem' },
                mt: { xs: '1rem', sm: 0 }
              }}
            />
            
            <Typography className="exp-modern-desc" sx={{ fontSize: '1.05rem', lineHeight: 1.6, mb: '1.5rem', color: 'text.secondary' }}>
              {exp.description}
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem', flex: 1 }}>
              {exp.certificateUrl && (
                <Box sx={{ mt: 'auto', ml: 0, width: { xs: '100%', sm: 'auto' }, pt: { xs: '6px', sm: 0 } }}>
                  <SpecularButton as="a" href={exp.certificateUrl} size="sm" target="_blank" rel="noreferrer" style={{ gap: '0.5rem' }}>
                    View Certificate <ExternalLink size={14} />
                  </SpecularButton>
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;


