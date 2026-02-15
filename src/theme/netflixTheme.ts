import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

const netflixTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E50914', // Netflix Red
    },
    background: {
      default: '#141414',
      paper: '#181818',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(229, 229, 229, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
  },
  typography: {
    fontFamily: '"Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '3.2rem',
      fontWeight: 700,
      lineHeight: 1.1,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
  spacing: 8, // Base spacing unit
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000000',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        html: {
          backgroundColor: '#000000',
        },
      },
    },
  },
});

export default netflixTheme;
