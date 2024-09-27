import { createTheme } from '@mui/material/styles';
import '../css/global.css'


export const Theme = createTheme({
  palette: {
    background: {
      default: '#0B1D26',
    },
  },

  typography: {
    allVariants: {
      fontFamily: 'Gilroy-Medium, sans-serif',
      fontWeight: '300',
      fontSize: '1.2rem',
      textDecoration: 'none',
      color: '#ffffff'
    },
        
    h1: {
      fontFamily: 'Chronicle-Light',
      fontWeight: '300',
      fontSize: 'clamp(1.5rem, 5vw + 1rem, 5rem)',
      letterSpacing: '0.02rem'
    },

    h2: {
      fontFamily: 'Chronicle-Light',
      fontWeight: '300',
      fontSize: 'clamp(1rem, 3.5vw + 1rem, 3.5rem)',
      letterSpacing: '0.02rem'
    },

    h3: {
      fontFamily: 'Gilroy-Medium',
      fontWeight: '700',
      fontSize: 'clamp(5rem, 8vw + 1rem, 8rem)',
      opacity: '0.1'
    }
  },
  components: {
    
    // Buttons
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', 
          backgroundColor: 'transparent',
          border: 'none',
          '&:hover': {
            color: '#ffffff',
          } 
        },
      },
    },

    //Links
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: 'Gilroy-Medium, sans-serif',
          textDecoration: 'none', 
          '&:hover': {
            color: '#ced4da' 
          },
          color: '#ffffff',
          padding: '0',
          fontSize: '1.2rem'
        },
      },
    },
  },
});


export default Theme;