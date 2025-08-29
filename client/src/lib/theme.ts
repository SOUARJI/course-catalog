import { createTheme } from '@mui/material/styles';

export const createAppTheme = (darkMode: boolean) => {
  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#00acc1',
        light: '#26c6da',
        dark: '#0097a7',
        contrastText: '#ffffff',
      },
      background: {
        default: darkMode ? '#121212' : '#fafafa',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
        secondary: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h3: {
        fontWeight: 500,
        fontSize: '2.5rem',
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h6: {
        fontWeight: 500,
        fontSize: '1.25rem',
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: darkMode 
                ? '0 8px 25px rgba(255,255,255,0.1)' 
                : '0 8px 25px rgba(0,0,0,0.15)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(10px)',
            backgroundColor: darkMode 
              ? 'rgba(18, 18, 18, 0.95)' 
              : 'rgba(25, 118, 210, 0.95)',
          },
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
  });
};
