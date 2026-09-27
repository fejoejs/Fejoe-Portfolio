import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#070A12',
      paper: '#171D27',
      secondary: '#0C111B',
    },
    primary: {
      main: '#00D9FF', // Cyan
    },
    secondary: {
      main: '#6C2BFF', // Purple
    },
    text: {
      primary: '#F5F7FA',
      secondary: '#C0CCDA',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Space Grotesk", monospace' },
    h2: { fontFamily: '"Space Grotesk", monospace' },
    h3: { fontFamily: '"Space Grotesk", monospace' },
    h4: { fontFamily: '"Space Grotesk", monospace' },
    h5: { fontFamily: '"Space Grotesk", monospace' },
    h6: { fontFamily: '"Space Grotesk", monospace' },
    button: { fontFamily: '"Space Grotesk", monospace', textTransform: 'none' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        
        
        :root {
          --bg-primary: #070A12;
          --bg-secondary: #0C111B;
          --card-bg: #171D27;
          --card-hover: #1B2330;
          --accent-cyan: #00D9FF;
          --accent-purple: #6C2BFF;
          --accent-pink: #FF7AE8;
          --text-white: #F5F7FA;
          --text-muted: #C0CCDA;
          --font-sans: 'Inter', sans-serif;
          --font-mono: 'Space Grotesk', monospace;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
          background-color: var(--bg-primary);
          color: var(--text-white);
          font-family: var(--font-sans);
          overflow-x: hidden;
          line-height: 1.6;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ul {
          list-style: none;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: var(--bg-primary);
        }
        ::-webkit-scrollbar-thumb {
          background: var(--bg-secondary);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--card-bg);
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 24px;
          position: relative;
          z-index: 10;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(0, 217, 255, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px -10px rgba(108, 43, 255, 0.25);
        }

        .text-cyan { color: var(--accent-cyan); }
        .text-purple { color: var(--accent-purple); }
        .text-muted { color: var(--text-muted); }
        .font-mono { font-family: var(--font-mono); }

        @media (max-width: 768px) {
          .section-container {
            padding: 60px 16px;
          }
          
          .exp-modern-desc, .project-desc, .pub-abstract {
            text-align: justify;
            font-size: 0.9rem !important;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;
            hyphens: auto;
          }
        }

        @keyframes pulse-glow {
          0% { box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5); }
          50% { box-shadow: 0 10px 30px -15px rgba(0, 217, 255, 0.15), 0 0 15px rgba(108, 43, 255, 0.1); }
          100% { box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5); }
        }

        .exp-modern-card, .edu-modern-card, .publication-modern-card, .project-card, .skill-bar-card {
          animation: pulse-glow 8s infinite alternate ease-in-out;
        }

        @keyframes text-shimmer {
          0% { text-shadow: 0 0 4px rgba(0, 217, 255, 0); }
          50% { text-shadow: 0 0 12px rgba(0, 217, 255, 0.4); }
          100% { text-shadow: 0 0 4px rgba(0, 217, 255, 0); }
        }

        .hero-title span {
          animation: text-shimmer 4s infinite ease-in-out;
        }
      `,
    },
  },
});

export default theme;
