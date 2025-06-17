import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ textAlign: 'center', py: '50px' }}>
      <Box>
        <Link href="https://github.com/kamanl16" target="_blank" rel="noreferrer" color="inherit" sx={{ mr: 1 }}><GitHubIcon sx={{ fontSize: '1.1em' }}/></Link>
        <Link href="https://www.linkedin.com/in/kamanl16/" target="_blank" rel="noreferrer" color="inherit"><LinkedInIcon sx={{ fontSize: '1.1em' }}/></Link>
      </Box>
      <Typography sx={{ fontSize: '0.8em', mt: 1 }}>
        © 2025 Carmen Leung. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;