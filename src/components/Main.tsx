// src/components/Main.tsx
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Main() {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      padding: { xs: '150px 5% 5%', md: '0px 15%' },
      minHeight: '700px',
      backgroundColor: theme.palette.background.default,
      // Subtle dot grid overlay
      backgroundImage: theme.palette.mode === 'dark'
        ? 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)'
        : 'radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    }}>
      <Box sx={{ textAlign: 'left', zIndex: 2, borderLeft: `4px solid ${theme.palette.mode === 'dark' ? '#64ffda' : '#006fcb'}`, pl: 3 }}>
        
        {/* Desktop Social Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', gap: '15px', color: 'text.primary', mb: 2 }}>
          <Link href="https://github.com/kamanl16" target="_blank" rel="noreferrer" color="inherit"><GitHubIcon sx={{ fontSize: '1.8em' }}/></Link>
          <Link href="https://www.linkedin.com/in/kamanl16/" target="_blank" rel="noreferrer" color="inherit"><LinkedInIcon sx={{ fontSize: '1.8em' }}/></Link>
        </Box>
        
        {/* Main Name */}
        <Typography variant="h1" sx={{ fontSize: { xs: '3em', md: '4.5em' }, m: 0, color: 'text.primary', fontWeight: 'bold' }}>
          Carmen Leung
        </Typography>
        
        {/* Professional Title */}
        <Typography variant="h4" component="h2" sx={{ fontSize: { xs: '1.2em', md: '1.8em' }, m: 0, color: theme.palette.mode === 'dark' ? '#64ffda' : '#006fcb', mt: 1, fontWeight: 600 }}>
          Technical Leader & Software Engineer
        </Typography>

        {/* Elevator Pitch */}
        <Typography variant="body1" sx={{ fontSize: { xs: '1em', md: '1.1em' }, color: 'text.secondary', mt: 2, maxWidth: '600px', lineHeight: 1.6 }}>
          Specializing in high-availability systems, full-stack development, and data analytics. I bring a rare dual-competency in engineering and project management to decouple complex business logic into scalable, seamless solutions.
        </Typography>

        {/* Mobile Social Links */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'row', gap: '15px', color: 'text.primary', pt: 3 }}>
            <Link href="https://github.com/kamanl16" target="_blank" rel="noreferrer" color="inherit"><GitHubIcon sx={{ fontSize: '1.8em' }}/></Link>
            <Link href="https://www.linkedin.com/in/kamanl16/" target="_blank" rel="noreferrer" color="inherit"><LinkedInIcon sx={{ fontSize: '1.8em' }}/></Link>
        </Box>

      </Box>
    </Box>
  );
}

export default Main;