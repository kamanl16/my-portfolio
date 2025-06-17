import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import bgDark from '../assets/images/bg-dark.png';
import bgLight from '../assets/images/bg-light.png';

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
      backgroundImage: `url(${theme.palette.mode === 'dark' ? bgDark : bgLight})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
    }}>
      <Box sx={{ textAlign: 'left', zIndex: 2 }}>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', gap: '10px', color: 'text.primary', mb: 1 }}>
          <Link href="https://github.com/kamanl16" target="_blank" rel="noreferrer" color="inherit"><GitHubIcon sx={{ fontSize: '1.8em' }}/></Link>
          <Link href="https://www.linkedin.com/in/kamanl16/" target="_blank" rel="noreferrer" color="inherit"><LinkedInIcon sx={{ fontSize: '1.8em' }}/></Link>
        </Box>
        <Typography variant="h1" sx={{ fontSize: { xs: '4em', md: '5em' }, m: 0, color: 'text.primary' }}>Carmen Leung</Typography>
        <Typography variant="h4" component="p" sx={{ fontSize: { xs: '1.2em', md: '1.5em' }, m: 0, color: 'text.primary' }}>Project Manager</Typography>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'row', gap: '10px', color: 'text.primary', pt: 1 }}>
            <Link href="https://github.com/kamanl16" target="_blank" rel="noreferrer" color="inherit"><GitHubIcon sx={{ fontSize: '1.8em' }}/></Link>
            <Link href="https://www.linkedin.com/in/kamanl16/" target="_blank" rel="noreferrer" color="inherit"><LinkedInIcon sx={{ fontSize: '1.8em' }}/></Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Main;