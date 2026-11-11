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
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: { xs: '1.5rem', sm: '2rem' },
          maxWidth: '1200px',
          mx: 'auto',
          alignItems: 'stretch',
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
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '20px',
              padding: { xs: '1.5rem', sm: '1.75rem' },
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              position: 'relative',
              overflow: 'hidden',
              height: '100%',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: '0 16px 36px -10px rgba(0, 217, 255, 0.15)',
                borderColor: 'rgba(0, 217, 255, 0.3)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--accent-cyan), var(--accent-purple), transparent)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                zIndex: 20,
              },
              '&:hover::before': {
                opacity: 1,
              }
            }}
          >
            {/* Header: Logo + Institution Name & Degree */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', mb: '1.25rem' }}>
              <Box 
                sx={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  p: '4px',
                  boxShadow: '0 4px 14px rgba(255, 255, 255, 0.12)',
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
              
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography 
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '0.925rem' },
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.35,
                    letterSpacing: '-0.2px',
                    minHeight: { sm: '2.5rem' },
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {edu.institution}
                </Typography>
                <Typography 
                  sx={{
                    fontSize: '0.825rem',
                    color: 'rgba(255, 255, 255, 0.65)',
                    lineHeight: 1.4,
                    mt: '0.2rem',
                  }}
                >
                  {edu.degree}
                </Typography>
              </Box>
            </Box>

            {/* Stream / Major in Cyan */}
            <Typography 
              sx={{
                fontSize: '0.925rem',
                fontWeight: 600,
                color: 'primary.main',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.3px',
                mb: '1rem',
                minHeight: '1.4rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {edu.major}
            </Typography>

            {/* Score Row: Label on Left, Value on Right */}
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                mt: 'auto',
                pt: '0.5rem',
                mb: '1rem',
              }}
            >
              <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', fontWeight: 500 }}>
                {edu.scoreLabel || 'Score'}
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: '1.05rem', 
                  fontWeight: 700, 
                  color: 'secondary.main', 
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.5px',
                }}
              >
                {edu.scoreValue}
              </Typography>
            </Box>

            {/* Divider Line */}
            <Box 
              sx={{
                height: '1px',
                width: '100%',
                background: 'rgba(255, 255, 255, 0.08)',
                mb: '1rem',
              }}
            />

            {/* Bottom Row: Date on Left, Status Badge on Right */}
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography 
                className="font-mono"
                sx={{
                  fontSize: '0.85rem',
                  color: 'text.secondary',
                  letterSpacing: '0.5px',
                }}
              >
                {edu.period}
              </Typography>

              <Box 
                component="span"
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  px: '0.65rem',
                  py: '0.22rem',
                  borderRadius: '999px',
                  bgcolor: 'rgba(0, 217, 255, 0.08)',
                  color: 'primary.main',
                  border: '1px solid rgba(0, 217, 255, 0.25)',
                  letterSpacing: '0.5px',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'none',
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
