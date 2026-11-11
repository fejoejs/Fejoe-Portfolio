import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { personalInfo } from '../portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinkStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.45rem',
    color: 'text.secondary',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 500,
    fontFamily: 'var(--font-mono)',
    transition: 'all 0.2s ease',
    px: '0.75rem',
    py: '0.5rem',
    borderRadius: '8px',
    minHeight: '44px',
    minWidth: '44px',
    WebkitTapHighlightColor: 'transparent',
    '&:hover': {
      color: 'primary.main',
      background: 'rgba(0, 217, 255, 0.06)',
    },
    '&:active': {
      transform: 'scale(0.96)',
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        position: 'relative',
        background: 'rgba(7, 10, 18, 0.97)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        pt: { xs: '1.5rem', sm: '2rem' },
        pb: { xs: 'max(1.5rem, env(safe-area-inset-bottom))', sm: '2rem' },
        px: 0,
        zIndex: 10,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.4), rgba(108, 43, 255, 0.4), transparent)',
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ px: { xs: '1.25rem', sm: '2rem', md: '3rem' } }}
      >
        {/* Top Row: Name / Role + Badge  |  Socials */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: '1rem', sm: '1.5rem' },
            pb: { xs: '1rem', sm: '1.25rem' },
          }}
        >
          {/* Left: identity + badge */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: '0.5rem', sm: '0.75rem' },
              flexWrap: 'wrap',
              rowGap: '0.4rem',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.2px',
                lineHeight: 1,
              }}
            >
              Fejoe J S
            </Typography>

            <Typography
              component="span"
              sx={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: '0.95rem',
                lineHeight: 1,
              }}
            >
              /
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '0.85rem', sm: '0.9rem' },
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              {personalInfo.role}
            </Typography>

            {/* Cyan Available For Work Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                px: { xs: '0.6rem', sm: '0.75rem' },
                py: '0.25rem',
                borderRadius: '999px',
                background: 'rgba(0, 217, 255, 0.06)',
                border: '1px solid rgba(0, 217, 255, 0.3)',
                flexShrink: 0,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  bgcolor: '#00D9FF',
                  boxShadow: '0 0 8px #00D9FF',
                  animation: 'pulse-dot 1.8s infinite ease-in-out',
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: '0.68rem', sm: '0.72rem' },
                  fontWeight: 700,
                  color: '#00D9FF',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.6px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                Available for work
              </Typography>
            </Box>
          </Box>

          {/* Right: Social Links */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: '0.25rem', sm: '0.5rem' },
              flexShrink: 0,
            }}
          >
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              sx={socialLinkStyles}
              aria-label="GitHub"
            >
              <Github size={16} />
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                GitHub
              </Box>
            </Link>

            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              sx={socialLinkStyles}
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                LinkedIn
              </Box>
            </Link>

            <Link
              href={`mailto:${personalInfo.email}`}
              sx={socialLinkStyles}
              aria-label="Email"
            >
              <Mail size={16} />
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                Email
              </Box>
            </Link>
          </Box>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            height: '1px',
            bgcolor: 'rgba(255,255,255,0.08)',
            mb: { xs: '0.875rem', sm: '1rem' },
          }}
        />

        {/* Bottom Row: © | Back to Top */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.78rem', sm: '0.85rem' },
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            © {new Date().getFullYear()} Fejoe J S. All rights reserved.
          </Typography>

          <Box
            component="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              background: 'transparent',
              border: 'none',
              color: 'text.secondary',
              fontSize: { xs: '0.75rem', sm: '0.8rem' },
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              cursor: 'pointer',
              p: '0.4rem 0.6rem',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
              outline: 'none',
              minHeight: '44px',
              minWidth: '44px',
              WebkitTapHighlightColor: 'transparent',
              '&:hover': {
                color: 'primary.main',
                background: 'rgba(0,217,255,0.06)',
              },
              '&:active': {
                transform: 'scale(0.95)',
              },
            }}
          >
            <Box
              component="span"
              sx={{ display: { xs: 'none', sm: 'inline' } }}
            >
              Back to Top
            </Box>
            <ArrowUp size={14} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
