import React from 'react';
import { Box, Container, Typography, Link, Stack } from '@mui/material';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { personalInfo, projects } from '../portfolioData';



const Footer = () => {
  const linkStyles = {
    color: 'text.secondary',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 500,
    transition: 'color 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    '&:hover': {
      color: 'primary.main',
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.default',
        pt: { xs: 4, sm: 7 },
        pb: { xs: 3, sm: 3 },
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Container maxWidth="lg" sx={{ px: '24px' }}>
        
        {/* Main Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: '2fr 1fr 1fr 1fr' },
            columnGap: { xs: '1.5rem', sm: '2rem' },
            rowGap: { xs: '2.5rem', sm: '2rem' },
            mb: '2.5rem',
          }}
        >
          
          {/* Column 1: Brand */}
          <Box 
            sx={{ 
              gridColumn: { xs: '1 / -1', sm: 'auto' },
              maxWidth: { xs: '100%', sm: '300px' },
              pb: { xs: '2rem', sm: 0 },
              borderBottom: { xs: '1px solid rgba(255, 255, 255, 0.1)', sm: 'none' }
            }}
          >
            <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, color: 'primary.main', mb: '0.25rem', fontFamily: 'var(--font-sans)' }}>
              Fejoe J S
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', mb: '1rem' }}>
              Full Stack Developer
            </Typography>
            <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', lineHeight: 1.5 }}>
              Transforming complex ideas into elegant, high-performance digital solutions.
            </Typography>
          </Box>

          {/* Column 2: Quick Links */}
          <Box 
            sx={{ 
              textAlign: { xs: 'left', sm: 'left' },
              pb: { xs: '2rem', sm: 0 },
              pl: { xs: '2rem', sm: 0 },
              borderBottom: { xs: '1px solid rgba(255, 255, 255, 0.1)', sm: 'none' }
            }}
          >
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '1px', textTransform: 'uppercase', mb: '1.25rem' }}>
              Quick Links
            </Typography>
            <Stack component="ul" spacing="1rem" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {['About', 'Skills', 'Projects', 'Experience', 'Education'].map((item) => (
                <li key={item}><Link href={`#${item.toLowerCase()}`} sx={linkStyles}>{item}</Link></li>
              ))}
            </Stack>
          </Box>

          {/* Column 3: PROJECTS */}
          <Box 
            sx={{ 
              textAlign: { xs: 'left', sm: 'left' },
              pb: { xs: '2rem', sm: 0 },
              pl: { xs: '2rem', sm: 0 },
              borderBottom: { xs: '1px solid rgba(255, 255, 255, 0.1)', sm: 'none' }
            }}
          >
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '1px', textTransform: 'uppercase', mb: '1.25rem' }}>
              PROJECTS
            </Typography>
            <Stack component="ul" spacing="1rem" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <li><Link href={projects[0]?.demoUrl || '#'} target="_blank" rel="noreferrer" sx={linkStyles}>Portfolio</Link></li>
              <li><Link href={projects[1]?.demoUrl || '#'} target="_blank" rel="noreferrer" sx={linkStyles}>Ecoverse</Link></li>
              <li><Link href={projects[2]?.demoUrl || '#'} target="_blank" rel="noreferrer" sx={linkStyles}>VaxiPredict</Link></li>
            </Stack>
          </Box>

          {/* Column 4: CONNECT */}
          <Box 
            sx={{ 
              gridColumn: { xs: '1 / -1', sm: 'auto' },
              pb: { xs: '1rem', sm: 0 }
            }}
          >
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '1px', textTransform: 'uppercase', mb: '1.25rem' }}>
              CONNECT
            </Typography>
            <Stack 
              component="ul" 
              direction={{ xs: 'row', sm: 'column' }} 
              sx={{ 
                listStyle: 'none', p: 0, m: 0, 
                flexWrap: 'wrap', columnGap: '2rem', rowGap: '1rem' 
              }}
            >
              <li>
                <Link href={personalInfo.github} target="_blank" rel="noreferrer" sx={linkStyles}>
                  <Github size={14} style={{ opacity: 0.6 }} /> GitHub <ArrowUpRight size={12} style={{ opacity: 0.4 }} />
                </Link>
              </li>
              <li>
                <Link href={personalInfo.linkedin} target="_blank" rel="noreferrer" sx={linkStyles}>
                  <Linkedin size={14} style={{ opacity: 0.6 }} /> LinkedIn <ArrowUpRight size={12} style={{ opacity: 0.4 }} />
                </Link>
              </li>
              <li>
                <Link href={`mailto:${personalInfo.email}`} sx={linkStyles}>
                  <Mail size={14} style={{ opacity: 0.6 }} /> Email <ArrowUpRight size={12} style={{ opacity: 0.4 }} />
                </Link>
              </li>
            </Stack>
          </Box>

        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            textAlign: 'center',
            pt: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.3)',
          }}
        >
           2026 {personalInfo.name}. All rights reserved.
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;

