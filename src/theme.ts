import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// A custom theme for this app
let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0d1116',
    },
    secondary: {
      main: '#5000ca',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#0d1116',
      secondary: 'rgb(39, 40, 34)'
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    button: {
      textTransform: 'initial'
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h3: { // This targets variant="h3"
          fontSize: '2.0rem',
          fontWeight: 'bold',
          marginBottom: '32px', // theme.spacing(4)
        },
      },
    },
  },
});

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#5000ca',
    },
    background: {
      default: '#0d1116',
      paper: '#161b22',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgb(39, 40, 34)'
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    button: {
      textTransform: 'initial'
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h3: { // This targets variant="h3"
          fontSize: '2.0rem',
          fontWeight: 'bold',
          marginBottom: '32px', // theme.spacing(4)
        },
      },
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };