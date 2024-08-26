'use client';
import { createTheme } from '@mui/material/styles';

// Define your custom colors and theme
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#07051f',
      light: '#F5F5F5',
    },
    secondary: {
      main: '#dedcff',
    },
    info: {
      main: '#2f27ce',
    },
    background: {
      default: '#ffffff', // White background
    },
    text: {
      primary: '#07051f',
      secondary: '#4c4b66',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    button: {
      fontWeight: 600, // Customize button font weight
      textTransform: 'none', // Remove uppercase transformation
      // Set font size
    }, // Set the global font family to Inter
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins, Arial, sans-serif', // Apply font family to all buttons
          fontWeight: 600, // Font weight for all buttons
          textTransform: 'none', // Remove uppercase transformation
          '&:hover': {
            backgroundColor: 'inherit', // Prevent background color change on hover
            color: 'inherit', // Prevent text color change on hover
            boxShadow: 'none', // Remove box shadow on hover (if any)
          },
        },
      },
    },
  },
});

export default customTheme;
