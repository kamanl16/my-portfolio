import React, { useRef, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';


function Contact() {
  const theme = useTheme();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
  };

  return (
    <Box id="contact" sx={{ py: '5%', px: { xs: '5%', md: '10%' }, textAlign: 'left' }}>
      <Typography variant="h1" sx={{ mb: 2 }}>Contact Me</Typography>
      <Typography paragraph>Got a project waiting to be realized? Let's collaborate and make it happen!</Typography>
      <Box
        ref={form}
        component="form"
        noValidate
        autoComplete="off"
        sx={{ pt: 2 }}
      >
        <Box sx={{ display: 'flex', gap: 2, mb: 2, flexDirection: { xs: 'column', md: 'row' }}}>
          <TextField
            required
            fullWidth
            label="Your Name"
            placeholder="What's your name?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
            helperText={nameError ? "Please enter your name" : ""}
          />
          <TextField
            required
            fullWidth
            label="Email / Phone"
            placeholder="How can I reach you?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError ? "Please enter your email or phone number" : ""}
          />
        </Box>
        <TextField
          required
          fullWidth
          multiline
          rows={10}
          label="Message"
          placeholder="Send me any inquiries or questions"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={messageError}
          helperText={messageError ? "Please enter the message" : ""}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail} sx={{
          float: 'right',
          backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'primary.main',
          color: theme.palette.mode === 'dark' ? '#050f0b' : 'white',
          '&:hover': {
            backgroundColor: 'secondary.main',
            color: 'white',
          }
        }}>
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;