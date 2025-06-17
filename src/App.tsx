import React, { useState, useMemo, useEffect } from "react";
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import {
  Main,
  Timeline,
  Expertise,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '.vertical-timeline.vertical-timeline-custom-line::before': {
            background: theme.palette.grey[400],
          },
          '.svg-inline--fa': {
            color: theme.palette.text.primary,
          },
        }}
      />
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
      </FadeIn>
      <Footer />
    </ThemeProvider>
  );
}

export default App;