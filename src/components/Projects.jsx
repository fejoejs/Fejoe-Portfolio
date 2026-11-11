import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { Box, Typography } from '@mui/material';
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
          gap: { xs: '1.5rem', sm: '2rem' },
          alignItems: 'stretch',
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
            className="project-card"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'hidden',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.01)', 
              border: '1px solid rgba(255, 255, 255, 0.06)', 
              borderRadius: '20px',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)', 
              backdropFilter: 'blur(16px)', 
              WebkitBackdropFilter: 'blur(16px)',
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
                filter: 'brightness(1.05)',
                transform: 'scale(1.02)',
              }
            }}
          >
            {/* Image */}
            <Box 
              sx={{
                position: 'relative', 
                width: '100%', 
                aspectRatio: '16 / 9', 
                overflow: 'hidden',
                backgroundColor: 'rgba(7, 10, 18, 0.7)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <Box
                component="img"
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
                sx={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  objectPosition: 'top center',
                  transition: 'transform 0.4s ease, filter 0.4s ease', 
                  filter: 'brightness(0.92)' 
                }}
              />

              {/* Coming Soon badge — top left */}
              {project.isComingSoon && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                    zIndex: 10,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    px: '0.75rem',
                    py: '0.35rem',
                    borderRadius: '999px',
                    background: 'rgba(7, 10, 18, 0.85)',
                    border: '1px solid rgba(0, 217, 255, 0.4)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 16px rgba(0, 217, 255, 0.18)',
                    color: 'primary.main',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{ 
                      width: 6, 
                      height: 6, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main',
                      boxShadow: '0 0 8px #00D9FF',
                      animation: 'pulse-dot 1.8s infinite ease-in-out'
                    }} 
                  />
                  Coming Soon
                </Box>
              )}

              {/* Category badge — top right */}
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: '0.85rem', 
                  right: '0.85rem', 
                  zIndex: 10,
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: '0.85rem',
                  py: '0.35rem',
                  borderRadius: '999px',
                  background: 'rgba(7, 10, 18, 0.8)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(0, 217, 255, 0.35)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
                  color: 'primary.main',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.5px',
                }}
              >
                {project.badge}
              </Box>
            </Box>
            
            {/* Card Body */}
            <Box sx={{ p: { xs: '1.25rem', sm: '1.75rem' }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              {/* Title */}
              <Typography 
                variant="h3" 
                sx={{ 
                  fontSize: { xs: '1.35rem', sm: '1.5rem' }, 
                  fontWeight: 700, 
                  mb: '0.75rem', 
                  color: 'primary.main',
                  fontFamily: 'var(--font-sans)',
                  lineHeight: 1.25,
                  minHeight: { sm: '1.85rem' },
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'left',
                  letterSpacing: '-0.01em',
                  textShadow: '0 0 20px rgba(0, 217, 255, 0.25)',
                }}
              >
                {project.title}
              </Typography>
              
              {/* Description */}
              <Typography 
                className="project-desc" 
                sx={{ 
                  color: 'text.secondary', 
                  fontFamily: 'var(--font-sans)',
                  fontSize: { xs: '0.875rem', sm: '0.925rem' },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  mb: '1.5rem', 
                  textAlign: 'left',
                  minHeight: { md: '4.44rem' },
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  textOverflow: 'clip',
                }}
              >
                {project.description}
              </Typography>
              
              {/* Tech tags */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.45rem', 
                  mb: '1.5rem',
                  alignContent: 'flex-start',
                  minHeight: { md: '4.2rem' }
                }}
              >
                {project.technologies.map(tech => (
                  <Box 
                    component="span" 
                    key={tech} 
                    sx={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      padding: '0.28rem 0.6rem',
                      background: 'rgba(0, 217, 255, 0.04)',
                      border: '1px solid rgba(0, 217, 255, 0.22)',
                      borderRadius: '6px',
                      color: 'primary.main',
                      letterSpacing: '0.6px',
                      fontFamily: 'var(--font-mono)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        background: 'rgba(0, 217, 255, 0.1)',
                        borderColor: 'rgba(0, 217, 255, 0.45)',
                      }
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
              
              {/* Footer: buttons or coming soon */}
              <Box 
                sx={{ 
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
                  pt: '1.25rem', 
                  mt: 'auto',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'center'
                }}
              >
                {project.isComingSoon ? (
                  <Box
                    sx={{
                      width: '100%',
                      py: '0.7rem',
                      px: '1.25rem',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.07) 0%, rgba(108, 43, 255, 0.07) 100%)',
                      border: '1px solid rgba(0, 217, 255, 0.28)',
                      boxShadow: '0 0 18px rgba(0, 217, 255, 0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      backdropFilter: 'blur(10px)',
                      userSelect: 'none',
                      animation: 'pulse-glow 3s infinite ease-in-out',
                    }}
                  >
                    <Box 
                      component="span" 
                      sx={{ 
                        width: 7, 
                        height: 7, 
                        borderRadius: '50%', 
                        bgcolor: 'primary.main', 
                        boxShadow: '0 0 10px #00D9FF, 0 0 20px rgba(0,217,255,0.4)',
                        animation: 'pulse-dot 1.8s infinite ease-in-out',
                        flexShrink: 0,
                      }} 
                    />
                    Coming Soon
                    <Box
                      component="span"
                      sx={{
                        ml: 'auto',
                        fontSize: '0.65rem',
                        fontWeight: 500,
                        letterSpacing: '1px',
                        color: 'rgba(0, 217, 255, 0.55)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      IN PROGRESS
                    </Box>
                  </Box>
                ) : (
                  <>
                    {project.demoUrl && (
                      <SpecularButton 
                        as="a" 
                        href={project.demoUrl} 
                        size="sm" 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ flex: 1, gap: '0.5rem', justifyContent: 'center' }}
                      >
                        Live Demo <ExternalLink size={16} />
                      </SpecularButton>
                    )}
                    {project.githubUrl && (
                      <SpecularButton 
                        as="a" 
                        href={project.githubUrl} 
                        size="sm" 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ gap: '0.5rem', justifyContent: 'center', padding: '0 1rem' }}
                      >
                        <Github size={15} />
                        GitHub 
                        <ExternalLink size={13} />
                      </SpecularButton>
                    )}
                  </>
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
