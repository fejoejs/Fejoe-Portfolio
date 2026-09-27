import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { skills } from '../portfolioData';

const getSkillInfo = (skill) => {
  const data = {
    'HTML': { percent: 95, label: 'Expert' },
    'CSS': { percent: 90, label: 'Expert' },
    'React': { percent: 85, label: 'Advanced' },
    'JS': { percent: 85, label: 'Advanced' },
    'JavaScript': { percent: 85, label: 'Advanced' },
    'MUI': { percent: 80, label: 'Advanced' },
    'Java': { percent: 90, label: 'Expert' },
    'Python': { percent: 85, label: 'Advanced' },
    'C': { percent: 75, label: 'Intermediate' },
    'FastAPI': { percent: 80, label: 'Advanced' },
    'SQL': { percent: 85, label: 'Advanced' },
    'MongoDB': { percent: 80, label: 'Advanced' },
    'VS Code': { percent: 95, label: 'Expert' },
    'GitHub': { percent: 90, label: 'Expert' },
    'Git': { percent: 85, label: 'Advanced' },
    'Figma': { percent: 75, label: 'Intermediate' },
    'Canva': { percent: 85, label: 'Advanced' }
  };
  return data[skill] || { percent: 80, label: 'Advanced' };
};

const Skills = () => {
  const backendItems = skills.categories.find(c => c.title === 'BACKEND').items.map(item => ({ name: item, type: 'Backend' }));
  const dbItems = skills.categories.find(c => c.title === 'DATABASE').items.map(item => ({ name: item, type: 'Database' }));

  const fourBoxes = [
    { title: 'FRONTEND', items: skills.categories.find(c => c.title === 'FRONTEND').items.map(name => ({ name })) },
    { title: 'PROGRAMMING', items: skills.categories.find(c => c.title === 'PROGRAMMING').items.map(name => ({ name })) },
    { title: 'BACKEND & DB', items: [...backendItems, ...dbItems] },
    { title: 'TOOLS', items: skills.tools.map(name => ({ name })) },
  ];

  return (
    <Box 
      component="section" 
      id="skills" 
      className="section-container"
      sx={{ pt: { xs: '45px !important', sm: '100px' } }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        
        <Box
          component={motion.h2}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
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
          SKILLS
        </Box>

        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: { xs: '1.5rem', lg: '2rem' },
            width: '100%',
          }}
        >
          {fourBoxes.map((category, idx) => (
            <Box
              component={motion.div}
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="skill-bar-card"
              sx={{
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '20px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                overflow: 'hidden',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  borderColor: 'rgba(0, 217, 255, 0.3)',
                  boxShadow: '0 20px 40px -10px rgba(0, 217, 255, 0.15)',
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
                },
                '&:hover::before': {
                  opacity: 1,
                },
                '&:hover .bar-card-num': {
                  textShadow: '0 0 12px rgba(0, 217, 255, 0.6)',
                }
              }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  display: 'flex', alignItems: 'center', gap: '0.5rem', 
                  fontSize: '1.1rem', color: 'text.primary', letterSpacing: '0.5px', whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Box component="span" className="bar-card-num" sx={{ color: 'primary.main', fontWeight: 700, transition: 'text-shadow 0.3s ease' }}>
                  0{idx + 1}
                </Box>
                {category.title}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {category.items.map((skillObj, i) => {
                  const skill = skillObj.name;
                  const info = getSkillInfo(skill);
                  const showSubHeader = category.title === 'BACKEND & DB' && (i === 0 || skillObj.type !== category.items[i - 1].type);

                  return (
                    <Box key={skill} sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                      {showSubHeader && (
                        <Typography sx={{ color: 'secondary.main', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', mt: i > 0 ? '0.5rem' : 0, mb: '0.5rem', letterSpacing: '1px' }}>
                          {skillObj.type.toUpperCase()}
                        </Typography>
                      )}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography sx={{ fontSize: '0.95rem', color: 'text.primary', fontWeight: 500 }}>{skill}</Typography>
                          <Typography sx={{ fontSize: '0.85rem', color: 'primary.main', fontFamily: 'var(--font-mono)' }}>{info.label}</Typography>
                        </Box>
                        <Box sx={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '99px', overflow: 'hidden', position: 'relative' }}>
                          <Box
                            component={motion.div}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${info.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                            sx={{
                              height: '100%',
                              background: 'linear-gradient(90deg, var(--accent-purple) 0%, #3B82F6 50%, var(--accent-cyan) 100%)',
                              borderRadius: '99px',
                              position: 'relative',
                              boxShadow: '0 0 10px rgba(0, 217, 255, 0.4)',
                              '&::after': {
                                content: '""',
                                position: 'absolute',
                                right: 0, top: 0, height: '100%', width: '6px',
                                background: '#fff',
                                borderRadius: '99px',
                                boxShadow: '0 0 10px #fff, 0 0 20px var(--accent-cyan)',
                                opacity: 0.9,
                              }
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
};

export default Skills;


