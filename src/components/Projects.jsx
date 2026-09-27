import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { Box, Typography, Link } from '@mui/material';
import { projects } from '../portfolioData';
import SpecularButton from './SpecularButton';

const Projects = () => {
  return (
    <Box 
      component="section" 
      id="projects" 
      className="section-container"
      sx={{ pt: { xs: '45px !important', sm: '100px' } }}
    >
      <Box
        component={motion.h2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
        Projects
      </Box>

      <Box 
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: '2rem',
        }}
      >
        {projects.map((project, idx) => (
          <Box
            component={motion.div}
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="project-card" /* Keep this class for the global pulse-glow keyframe in index.css */
            sx={{
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '20px',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px -10px rgba(0, 217, 255, 0.15), 0 10px 20px -10px rgba(108, 43, 255, 0.3)',
                borderColor: 'rgba(0, 217, 255, 0.3)',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                zIndex: 20,
              },
              '&:hover::before': {
                opacity: 1,
              },
              '&:hover .project-image': {
                filter: 'brightness(1.1)',
              }
            }}
          >
            <Box 
              sx={{
                position: 'relative', width: '100%', height: '240px', overflow: 'hidden',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <Box
                component="img"
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'filter 0.5s ease', filter: 'brightness(0.9)' }}
              />
              <Box sx={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, display: 'flex', gap: '0.5rem' }}>
                {project.githubUrl && (
                  <Link 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    title="View Source Code"
                    sx={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '36px', height: '36px',
                      background: 'rgba(7, 10, 18, 0.7)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '50%',
                      color: 'text.primary',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        background: 'primary.main',
                        color: 'background.default',
                        borderColor: 'primary.main',
                      }
                    }}
                  >
                    <Github size={20} />
                  </Link>
                )}
              </Box>
            </Box>
            
            <Box sx={{ p: { xs: '1.5rem', sm: '2rem' }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <Box sx={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', mb: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                <Box component="span" sx={{ color: 'primary.main' }}>{project.category}</Box>
                <Box component="span" sx={{ color: 'text.secondary' }}>|</Box>
                <Box component="span" sx={{ color: 'secondary.main' }}>{project.role}</Box>
              </Box>
              
              <Typography variant="h3" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' }, fontWeight: 700, mb: '1rem', color: 'text.primary' }}>
                {project.title}
              </Typography>
              <Typography className="project-desc" sx={{ color: 'text.secondary', mb: '1.5rem', flexGrow: 1 }}>
                {project.description}
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', mb: '2rem' }}>
                {project.technologies.map(tech => (
                  <Box 
                    component="span" 
                    key={tech} 
                    sx={{
                      fontSize: { xs: '0.7rem', sm: '0.75rem' },
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: { xs: '0.3rem 0.6rem', sm: '0.4rem 0.8rem' },
                      background: 'rgba(0, 217, 255, 0.05)',
                      border: '1px solid rgba(0, 217, 255, 0.3)',
                      borderRadius: '6px',
                      color: 'primary.main',
                      letterSpacing: '1px',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
              
              <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', pt: '1.5rem', mt: 'auto' }}>
                {project.demoUrl && (
                  <SpecularButton as="a" href={project.demoUrl} size="sm" target="_blank" rel="noreferrer" style={{ width: '100%', gap: '0.5rem' }}>
                    View Project <ExternalLink size={16} />
                  </SpecularButton>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;



