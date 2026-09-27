import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Box, Typography, Link, Snackbar, Alert } from '@mui/material';
import { personalInfo } from '../portfolioData';
import DownloadButton from './DownloadButton';

const Contact = () => {
  const [status, setStatus] = useState({ submitted: false, submitting: false, error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: false });

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        setStatus({ submitted: true, submitting: false, error: false });
        e.target.reset();
      } else {
        setStatus({ submitted: false, submitting: false, error: true });
      }
    } catch (error) {
      setStatus({ submitted: false, submitting: false, error: true });
    }
  };

  return (
    <Box 
      component="section" 
      id="contact" 
      className="section-container"
      sx={{ pt: { xs: '60px', sm: '100px' } }}
    >
      <Snackbar open={status.submitted} autoHideDuration={6000} onClose={() => setStatus({ ...status, submitted: false })} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" sx={{ width: '100%', background: 'rgba(0, 217, 255, 0.1)', color: '#fff', border: '1px solid rgba(0, 217, 255, 0.3)', backdropFilter: 'blur(10px)' }}>
          Message sent successfully! I will get back to you soon.
        </Alert>
      </Snackbar>
      <Snackbar open={status.error} autoHideDuration={6000} onClose={() => setStatus({ ...status, error: false })} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="error" sx={{ width: '100%' }}>
          Something went wrong. Please try again or email me directly.
        </Alert>
      </Snackbar>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        sx={{ textAlign: 'left', mb: '4rem' }}
      >
        <Typography 
          component="h2" 
          className="section-title"
          sx={{
            fontSize: { xs: '1.5rem', sm: '1rem' },
            mb: '1rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'primary.main',
            fontFamily: 'var(--font-mono)'
          }}
        >
          Let's Build Something Together
        </Typography>
        <Typography 
          sx={{ fontSize: '1.1rem', maxWidth: '600px', m: 0, color: 'text.secondary' }}
        >
          I'm open to opportunities, collaborations, and interesting projects.
        </Typography>
      </Box>

      <Box 
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1.5fr' },
          gap: { xs: '3rem', md: '4rem' }
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {[
            { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} />, color: 'primary.main', label: 'EMAIL', value: personalInfo.email },
            { href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`, icon: <Phone size={18} />, color: 'primary.main', label: 'PHONE', value: personalInfo.phone },
            { href: personalInfo.linkedin, target: "_blank", icon: <Linkedin size={18} />, color: 'secondary.main', label: 'LINKEDIN', value: 'linkedin.com/in/fejoe-js' },
            { href: personalInfo.github, target: "_blank", icon: <Github size={18} />, color: 'text.primary', label: 'GITHUB', value: 'github.com/fejoejs' }
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              target={item.target}
              rel={item.target ? "noreferrer" : undefined}
              sx={{
                position: 'relative', display: 'flex', alignItems: 'center', gap: { xs: '0.5rem', sm: '1rem' },
                padding: { xs: '1rem', sm: '1rem 1.25rem' }, flexDirection: { xs: 'column', sm: 'row' }, textAlign: { xs: 'center', sm: 'left' },
                textDecoration: 'none', background: 'rgba(255, 255, 255, 0.01)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&::before': {
                  content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  background: 'radial-gradient(circle at center, rgba(0, 217, 255, 0.15) 0%, transparent 70%)',
                  opacity: 0, transition: 'opacity 0.4s ease', zIndex: 0, pointerEvents: 'none'
                },
                '& > *': { zIndex: 1 },
                '&:hover': {
                  transform: { xs: 'translateY(-5px)', md: 'translateX(10px) translateY(-3px)' },
                  borderColor: 'rgba(0, 217, 255, 0.3)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 217, 255, 0.1)'
                },
                '&:hover::before': { opacity: 1 },
                '&:hover .contact-icon': {
                  transform: 'scale(1.1) rotate(5deg)',
                  background: 'rgba(0, 217, 255, 0.1)',
                  borderColor: 'primary.main',
                  boxShadow: '0 0 15px rgba(0, 217, 255, 0.2)'
                },
                '&:hover .contact-label': { color: 'primary.main' },
                '&:hover .contact-value': { transform: 'translateX(3px)' }
              }}
            >
              <Box className="contact-icon" sx={{
                width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.02)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', color: item.color
              }}>
                {item.icon}
              </Box>
              <Box>
                <Typography className="contact-label" sx={{ fontSize: '0.7rem', letterSpacing: '1px', mb: '0.15rem', color: 'text.secondary', transition: 'color 0.3s ease', fontFamily: 'var(--font-mono)' }}>
                  {item.label}
                </Typography>
                <Typography className="contact-value" sx={{ fontSize: '0.9rem', fontWeight: 500, color: 'text.primary', transition: 'transform 0.3s ease' }}>
                  {item.value}
                </Typography>
              </Box>
            </Link>
          ))}

          <Box sx={{ mt: '2rem', width: '100%', display: 'flex', justifyContent: 'center', '& .download-btn-container': { width: '100%', display: 'block' }, '& .download-button': { '--width': '100%', width: '100% !important', '--height': '56px', height: '56px !important', borderRadius: '12px !important' } }}>
            <DownloadButton href={personalInfo.resumeUrl} text="Download Resume" hideTooltip={true} />
          </Box>
        </Box>

        <Box
          component={motion.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          action="https://api.web3forms.com/submit"
          method="POST"
          sx={{
            p: { xs: '1.5rem', sm: '2rem' },
            display: 'flex', flexDirection: 'column', gap: '1.5rem',
            background: '#0a0e17 !important',
            borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <input type="hidden" name="access_key" value="a37b6a1c-8c68-481f-b410-82d0e6aa312a" />
          <input type="hidden" name="subject" value="New Submission from Portfolio" />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />

          {[
            { id: 'name', label: 'NAME', type: 'text', placeholder: 'Your Full Name' },
            { id: 'email', label: 'EMAIL', type: 'email', placeholder: 'Your Email Address' },
            { id: 'subject_line', label: 'SUBJECT', type: 'text', placeholder: "What's this about?", name: 'Inquiry Subject' }
          ].map((field) => (
            <Box key={field.id} sx={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Typography component="label" htmlFor={field.id} sx={{ fontSize: '0.75rem', letterSpacing: '1.5px', fontWeight: 700, color: '#e2e8f0', fontFamily: 'var(--font-sans)' }}>
                {field.label}
              </Typography>
              <Box 
                component="input" 
                type={field.type} id={field.id} name={field.name || field.id} required placeholder={field.placeholder}
                sx={{
                  background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px', p: '12px 16px', color: '#fff', fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem', transition: 'all 0.3s ease',
                  '&::placeholder': { color: 'rgba(255, 255, 255, 0.3)' },
                  '&:focus': { outline: 'none', borderColor: 'rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.05)' }
                }}
              />
            </Box>
          ))}
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <Typography component="label" htmlFor="message" sx={{ fontSize: '0.75rem', letterSpacing: '1.5px', fontWeight: 700, color: '#e2e8f0', fontFamily: 'var(--font-sans)' }}>
              MESSAGE
            </Typography>
            <Box 
              component="textarea" 
              id="message" name="message" rows="4" required placeholder="Tell me about your project, opportunity..."
              sx={{
                background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px', p: '12px 16px', color: '#fff', fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem', transition: 'all 0.3s ease', resize: 'vertical', minHeight: '120px',
                '&::placeholder': { color: 'rgba(255, 255, 255, 0.3)' },
                '&:focus': { outline: 'none', borderColor: 'rgba(255, 255, 255, 0.2)', background: 'rgba(255, 255, 255, 0.05)' }
              }}
            />
          </Box>
          
          <Box
            component="button"
            type="submit"
            sx={{
              width: '100%', mt: '0.5rem', p: '14px',
              background: '#1a1f2e', color: '#fff',
              border: '1px solid rgba(108, 43, 255, 0.2)',
              borderRadius: '24px', fontSize: '1rem', fontWeight: 600,
              fontFamily: 'var(--font-sans)', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(108, 43, 255, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: '#232a3d',
                boxShadow: '0 6px 25px rgba(108, 43, 255, 0.25)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Send Message
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;




