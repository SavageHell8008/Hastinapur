import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#d4af37', // Gold
            light: '#f8e79c',
            dark: '#a38426',
            contrastText: '#000000',
        },
        secondary: {
            main: '#800020', // Burgundy
            light: '#a63345',
            dark: '#4d000f',
            contrastText: '#ffffff',
        },
        background: {
            default: '#0a0a0a',
            paper: 'rgba(255, 255, 255, 0.05)', // Glassmorphism base
        },
        text: {
            primary: '#f5f5f5',
            secondary: '#a0a0a0',
        },
    },
    typography: {
        fontFamily: '"Inter", "sans-serif"',
        h1: {
            fontFamily: '"Cinzel", "serif"',
            fontWeight: 700,
        },
        h2: {
            fontFamily: '"Playfair Display", "serif"',
            fontWeight: 700,
        },
        h3: {
            fontFamily: '"Playfair Display", "serif"',
            fontWeight: 600,
        },
        h4: {
            fontFamily: '"Playfair Display", "serif"',
        },
        button: {
            fontFamily: '"Inter", "sans-serif"',
            fontWeight: 600,
            letterSpacing: '0.05em',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                },
                containedPrimary: {
                    boxShadow: '0 0 10px rgba(212, 175, 55, 0.3)',
                    '&:hover': {
                        boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 16,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'rgba(10, 10, 10, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                },
            },
        },
    },
});
