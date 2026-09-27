import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Box, Typography } from '@mui/material';
import { publication } from '../portfolioData';
import SpecularButton from './SpecularButton';

const Publication = () => {
  return (
    <Box 
      component="section" 
      id="publications" 
      className="section-container"
      sx={{ pt: { xs: '45px !important', sm: '100px' } }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        sx={{ mb: '2rem' }}
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
          Publications
        </Typography>
      </Box>

      <Box sx={{ width: '100%' }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="publication-modern-card"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '20px',
            padding: { xs: '2rem', sm: '2rem 3rem' },
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': {
              transform: 'translateY(-6px)',
              boxShadow: '0 20px 40px -10px rgba(0, 217, 255, 0.15), 0 10px 20px -10px rgba(108, 43, 255, 0.3)',
              borderColor: 'rgba(0, 217, 255, 0.3)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0, left: 0, right: 0,
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
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: { xs: '1rem', sm: 0 }, mb: '1rem' }}>
            <Box 
              component="span"
              sx={{
                fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
                padding: '0.4rem 0.8rem', background: 'rgba(0, 217, 255, 0.05)',
                border: '1px solid rgba(0, 217, 255, 0.3)', borderRadius: '6px',
                color: 'primary.main', letterSpacing: '1px'
              }}
            >
              {publication.category}
            </Box>
            <Typography className="font-mono" sx={{ fontSize: '0.9rem', letterSpacing: '1px', fontWeight: 600, color: 'secondary.main' }}>
              {publication.date}
            </Typography>
          </Box>
          
          <Typography 
            variant="h3" 
            sx={{
              fontSize: { xs: '1.15rem', sm: '1.35rem' },
              fontWeight: 700, mb: '0.75rem', lineHeight: { xs: 1.4, sm: 1.3 },
              color: 'text.primary', maxWidth: { xs: '100%', sm: '90%' }
            }}
          >
            {publication.title}
          </Typography>
          
          <Typography sx={{ fontSize: '1rem', mb: '1rem', letterSpacing: '0.5px', color: 'text.secondary' }}>
            <strong>Authors:</strong> {publication.authors.map((author, i) => (
              <span key={i}>
                {author === "Fejoe J S" ? <strong style={{ color: 'var(--accent-cyan)' }}>{author}</strong> : author}
                {i < publication.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </Typography>

          <Box sx={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), transparent)', mb: '1.25rem' }} />

          <Typography className="pub-abstract" sx={{ fontSize: '1.05rem', lineHeight: 1.6, mb: '1.25rem', maxWidth: '95%', color: 'text.secondary' }}>
            {publication.abstract}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', mb: '1.5rem' }}>
            {publication.tags.map((tag, i) => (
              <Box 
                component="span"
                key={i} 
                className="font-mono"
                sx={{
                  fontSize: '0.75rem', padding: '0.35rem 0.7rem',
                  background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px',
                  color: 'text.secondary',
                  opacity: tag === "Streamlit" ? 0.6 : 1
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: { xs: '1.5rem', sm: 0 }, mt: 'auto' }}>
            <Typography className="font-mono" sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600, letterSpacing: '1px', pl: '1rem', borderLeft: '2px solid', borderColor: 'secondary.main' }}>
              {publication.metrics}
            </Typography>
            
            <Box>
              <SpecularButton as="a" href={publication.link} size="md" target="_blank" rel="noreferrer" style={{ gap: '0.5rem' }}>
                <span>View Journal Publication</span>
                <ExternalLink size={18} />
              </SpecularButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Publication;


