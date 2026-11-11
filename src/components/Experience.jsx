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
          maxWidth: { xs: '100%', md: '600px', lg: '1200px' },
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
              padding: { xs: '1.5rem', sm: '2rem' },
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
                display: 'flex',
                alignItems: 'center',
                gap: { xs: '0.75rem', sm: '1.25rem' },
                mb: '1.5rem'
              }}
            >
              <Box 
                sx={{
                  width: { xs: '48px', sm: '52px' },
                  height: { xs: '48px', sm: '52px' },
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.01)', 
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  flexShrink: 0,
                  m: 0
                }}
              >
                <img src={exp.logoUrl} alt={`${exp.company} logo`} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
              </Box>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                {/* Row 1: Company + Status */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    gap: '0.75rem',
                    mb: '0.35rem' 
                  }}
                >
                  <Typography 
                    sx={{
                      fontSize: { xs: '0.95rem', sm: '1.05rem' },
                      fontWeight: 700,
                      color: 'primary.main',
                      letterSpacing: '0.3px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      m: 0
                    }}
                  >
                    {exp.company}
                  </Typography>

                  <Box 
                    component="span"
                    sx={{
                      flexShrink: 0,
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
                </Box>

                {/* Row 2: Role + Period */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    gap: '0.75rem' 
                  }}
                >
                  <Typography 
                    component="h3"
                    sx={{
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontWeight: 500,
                      color: 'text.primary',
                      m: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {exp.role}
                  </Typography>

                  <Typography 
                    className="font-mono"
                    sx={{
                      fontSize: { xs: '0.78rem', sm: '0.85rem' },
                      color: 'text.secondary',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      m: 0
                    }}
                  >
                    {exp.period}
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Box 
              sx={{
                height: '1px',
                width: '100%',
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), transparent)',
                mb: { xs: '1.5rem', sm: '1.5rem' },
              }}
            />
            
            <Typography 
              className="exp-modern-desc" 
              sx={{ 
                fontSize: { xs: '0.95rem', sm: '1rem' }, 
                lineHeight: 1.6, 
                mb: '1.5rem', 
                color: 'text.secondary',
                minHeight: { md: '4.8rem' }
              }}
            >
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


