import React from 'react';
import { Box } from '@mui/material';

const GradientButton = ({ children, as: Component = 'button', hoverOnly = false, className = '', style, ...props }) => {
  return (
    <Box
      className={className}
      sx={{
        position: 'relative', display: 'inline-flex', padding: '2px', borderRadius: '99px',
        zIndex: 1, overflow: 'hidden', boxShadow: '0 4px 15px rgba(108, 43, 255, 0.2)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        textDecoration: 'none !important',
        '& *': { textDecoration: 'none !important' },
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 25px rgba(0, 217, 255, 0.3)',
        },
        '&:active': { transform: 'translateY(0)' },
        '&::before': {
          content: '""', position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
          background: 'conic-gradient(transparent, var(--accent-cyan), var(--accent-purple), var(--accent-cyan), transparent)',
          animation: 'rotate-border 3s linear infinite', zIndex: -1,
          transition: 'opacity 0.3s ease',
          opacity: hoverOnly ? 0 : 1,
          animationPlayState: hoverOnly ? 'paused' : 'running'
        },
        '&:hover::before': hoverOnly ? { opacity: 1, animationPlayState: 'running' } : {},
        ...style
      }}
    >
      <Box
        component={Component}
        {...props}
        sx={{
          position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          backgroundColor: 'background.paper', color: 'text.primary', padding: '0.8rem 1.8rem',
          borderRadius: '99px', fontSize: '1rem', fontWeight: 600, border: 'none', cursor: 'pointer',
          width: '100%', height: '100%', fontFamily: 'inherit',
          transition: 'background-color 0.2s ease, color 0.2s ease',
          textDecoration: 'none',
          '&:hover': { backgroundColor: 'background.secondary' },
          ...(props.sx || {})
        }}
      >
        {children}
      </Box>
      <style>{`
        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  );
};

export default GradientButton;

