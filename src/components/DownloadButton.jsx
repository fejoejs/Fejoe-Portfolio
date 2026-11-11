import React from 'react';
import { Box, Link } from '@mui/material';

const DownloadButton = ({ href, text = 'Download Resume', tooltip = 'PDF Document', className = '', hideTooltip = false }) => {
  return (
    <Link 
      href={href} 
      download 
      className={`download-btn-container ${className}`.trim()}
      sx={{ display: 'inline-block', textDecoration: 'none' }}
    >
      <Box 
        className="download-button"
        sx={{
          '--width': '180px',
          '--height': '52px',
          '--tooltip-height': '38px',
          '--tooltip-width': '120px',
          '--gap-between-tooltip-to-button': '18px',
          width: 'var(--width)',
          height: 'var(--height)',
          position: 'relative',
          textAlign: 'center',
          borderRadius: '99px',
          fontFamily: 'inherit',
          fontWeight: 600,
          background: 'rgba(108, 43, 255, 0.15)',
          border: '1px solid rgba(108, 43, 255, 0.4)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(108, 43, 255, 0.2)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          
          '&::before': hideTooltip ? { display: 'none !important' } : {
            position: 'absolute',
            content: `"${tooltip}"`,
            width: 'var(--tooltip-width)',
            height: 'var(--tooltip-height)',
            background: 'background.paper',
            border: '1px solid rgba(0, 217, 255, 0.3)',
            boxShadow: '0 4px 15px rgba(0, 217, 255, 0.15)',
            color: 'text.primary',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            borderRadius: '8px',
            lineHeight: 'calc(var(--tooltip-height) - 2px)',
            bottom: 'calc(var(--height) + var(--gap-between-tooltip-to-button) + 15px)',
            left: 'calc(50% - var(--tooltip-width) / 2)',
            opacity: 0,
            visibility: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          },
          '&::after': hideTooltip ? { display: 'none !important' } : {
            position: 'absolute',
            content: '""',
            width: 0,
            height: 0,
            border: '8px solid transparent',
            borderTopColor: 'background.paper',
            left: 'calc(50% - 8px)',
            bottom: 'calc(100% + var(--gap-between-tooltip-to-button) - 5px)',
            filter: 'drop-shadow(0 2px 2px rgba(0, 217, 255, 0.2))',
            opacity: 0,
            visibility: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          },
          
          '&:hover': {
            background: 'rgba(0, 217, 255, 0.15)',
            borderColor: 'rgba(0, 217, 255, 0.6)',
            boxShadow: '0 8px 25px rgba(0, 217, 255, 0.2), inset 0 0 15px rgba(0, 217, 255, 0.3)',
            transform: 'translateY(-2px)',
            '&::before': hideTooltip ? {} : {
              opacity: 1, visibility: 'visible',
              bottom: 'calc(var(--height) + var(--gap-between-tooltip-to-button))'
            },
            '&::after': hideTooltip ? {} : {
              opacity: 1, visibility: 'visible',
              bottom: 'calc(var(--height) + var(--gap-between-tooltip-to-button) - 15px)'
            },
            '& .text': { top: '-100%' },
            '& .icon': { top: 0 }
          }
        }}
      >
        <Box sx={{ overflow: 'hidden', position: 'absolute', width: '100%', height: '100%', left: 0 }}>
          <Box className="text" sx={{
            position: 'absolute', width: '100%', height: '100%', left: 0,
            color: 'text.primary', top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1rem', letterSpacing: '0.5px', transition: 'top 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}>
            {text}
          </Box>
          <Box className="icon" sx={{
            position: 'absolute', width: '100%', height: '100%', left: 0,
            color: 'primary.main', top: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'top 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 217, 255, 0.6))', width: '26px', height: '26px' }}>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
            </svg>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default DownloadButton;

