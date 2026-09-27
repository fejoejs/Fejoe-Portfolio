import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { education } from '../portfolioData';

const Education = () => {
  return (
    <Box 
      component="section" 
      id="education" 
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
          Education
        </Typography>
      </Box>

      <Box 
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr', lg: 'repeat(3, 1fr)' },
          gap: '2rem',
          maxWidth: { xs: '600px', lg: '1200px' },
          mx: 'auto'
        }}
      >
        {education.map((edu, idx) => (
          <Box
            component={motion.div}
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="edu-modern-card"
            sx={{
              display: { xs: 'grid', sm: 'flex' },
              gridTemplateColumns: { xs: '48px 1fr auto', sm: 'none' },
              gap: { xs: '0.25rem 1rem', sm: '0' },
              alignItems: { xs: 'center', sm: 'stretch' },
              flexDirection: { sm: 'column' },
              background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '20px',
              padding: { xs: '1.5rem', sm: '2rem' },
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              position: 'relative',
              overflow: 'hidden',
              height: '100%',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 30px -10px rgba(0, 217, 255, 0.1)',
                borderColor: 'rgba(0, 217, 255, 0.2)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, var(--accent-cyan), transparent)',
                opacity: 0.6,
                transition: 'opacity 0.4s ease, background 0.4s ease',
                zIndex: 20,
              },
              '&:hover::before': {
                opacity: 1,
                background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple), transparent)',
              }
            }}
          >
            <Box sx={{ display: { xs: 'contents', sm: 'flex' }, flexDirection: { sm: 'row' }, alignItems: { sm: 'flex-start' }, gap: { sm: '1.25rem' }, flex: { sm: 1 } }}>
              <Box 
                sx={{
                  gridColumn: { xs: '1 / 2', sm: 'auto' },
                  gridRow: { xs: '1 / 2', sm: 'auto' },
                  width: { xs: '48px', sm: '55px' },
                  height: { xs: '48px', sm: '55px' },
                  borderRadius: '50%',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  padding: '6px',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
                  mt: { xs: 0, sm: '0.2rem' },
                  m: { xs: 0, sm: 'auto' },
                }}
              >
                {edu.logoUrl ? (
                  <img src={edu.logoUrl} alt={edu.institution} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                  <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--bg-primary)' }}>
                    {edu.institution.charAt(0)}
                  </Typography>
                )}
              </Box>
              
              <Box sx={{ display: { xs: 'contents', sm: 'flex' }, flexDirection: { sm: 'column' }, gap: { sm: '0.35rem' } }}>
                <Typography 
                  sx={{
                    gridColumn: { xs: '2 / 4', sm: 'auto' },
                    gridRow: { xs: '1 / 2', sm: 'auto' },
                    fontSize: { xs: '1.15rem', sm: '0.9rem' },
                    fontWeight: 700,
                    color: 'text.primary',
                    lineHeight: 1.35,
                    m: 0,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {edu.institution}
                </Typography>
                <Typography 
                  sx={{
                    gridColumn: { xs: '1 / 4', sm: 'auto' },
                    gridRow: { xs: '2 / 3', sm: 'auto' },
                    fontSize: { xs: '0.95rem', sm: '0.9rem' },
                    fontWeight: { xs: 500, sm: 400 },
                    color: 'text.secondary',
                    m: 0,
                    mt: { xs: '0.5rem', sm: 0 },
                    lineHeight: { xs: 1.2, sm: 1.5 }
                  }}
                >
                  {edu.degree}
                </Typography>
                {edu.major && (
                  <Typography 
                    className="font-mono"
                    sx={{
                      gridColumn: { xs: '1 / 3', sm: 'auto' },
                      gridRow: { xs: '3 / 4', sm: 'auto' },
                      mt: { xs: '0.25rem', sm: 0 },
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      color: 'primary.main',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {edu.major}
                  </Typography>
                )}
                {edu.score && (
                  <Typography 
                    className="font-mono"
                    sx={{
                      gridColumn: { xs: '3 / 4', sm: 'auto' },
                      gridRow: { xs: '3 / 4', sm: 'auto' },
                      mt: { xs: '0.25rem', sm: '0.25rem' },
                      fontSize: '0.85rem',
                      color: 'secondary.main',
                      justifySelf: { xs: 'end', sm: 'auto' }
                    }}
                  >
                    {edu.score}
                  </Typography>
                )}
              </Box>
            </Box>

            <Box 
              sx={{
                display: { xs: 'none', sm: 'block' },
                height: '1px',
                width: '100%',
                background: 'rgba(255, 255, 255, 0.08)',
                my: '1.5rem'
              }}
            />

            <Box 
              sx={{
                gridColumn: { xs: '1 / 4', sm: 'auto' },
                gridRow: { xs: '4 / 5', sm: 'auto' },
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: { xs: '0.75rem', sm: 0 },
                mt: { xs: '0.75rem', sm: 0 }
              }}
            >
              <Typography 
                className="font-mono"
                sx={{
                  fontSize: { xs: '0.85rem', sm: '0.75rem' },
                  color: 'text.secondary',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  letterSpacing: '0.5px'
                }}
              >
                <Box component="span" sx={{ color: 'primary.main', fontSize: '8px' }}>*</Box> {edu.period}
              </Typography>
              <Box 
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.7rem',
                  border: '1px solid var(--accent-cyan)',
                  borderRadius: '50px',
                  color: 'primary.main',
                  background: 'transparent',
                  letterSpacing: '1px'
                }}
              >
                {edu.status}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education;


