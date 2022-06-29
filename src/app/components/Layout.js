import React from 'react';
// Global Styles
import {GlobalStyle} from '../styles/GlobalStyles';
// Components
import Header from './Header';
import ParticlesBackground from '../components/Particles';
import Footer from './Footer';
// Mui Components
import {CssBaseline} from '@mui/material'
import { createTheme, ThemeProvider, responsiveFontSizes  } from '@mui/material/styles';
import Box from '@mui/material/Box';
// Mui Colors
import { grey } from '@mui/material/colors';
// Pages
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Dashboard from '../pages/Dashboard';
// Others

const greyColor = grey[700];
const greyBackground = grey[100];

// Theme
let theme = createTheme({
    palette: {
        primary: {
            main: '#e3f2fd',
        },
        secondary: {
            main: '#f50057'
        },
        progress: {
            main: '#00d4ff'
        },
        titlePage: {
            main: '#444649'
        },
        blue: {
            main: '#041C32'
        },
        grey: {
            main: greyBackground
        }
    },
    typography: {
        fontFamily: 'Raleway, Arial',

        button: {
            textTransform: 'none'
          },

        p: {
            color: '#e3f2fd',
        },
        // Own fonts
        titleDashboard: {
            fontSize: '1.4rem',
            fontWeight: 400,
            '@media (min-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        navLinks: {
            fontSize: '1.4rem',
            fontWeight: 400,
            cursor: 'pointer',
            marginRight: '1rem'
        },
        titlePages: {
            fontSize: '3rem',
            fontWeight: 600,
            letterSpacing: '1px',
            textAlign: 'center',
        },
        subtitles: {
            fontSize: '1.7rem',
            color: greyColor,
            fontWeight: 600
        },
        description: {
            fontSize: '1.1rem',
            color: greyColor,
        },
        skillsTitle: {
            fontSize: '0.8rem'
        },
        percentage: {
            fontSize: '0.8rem',
            fontWeight: 600,
            '@media (min-width:1200px)': {
                fontSize: '1rem',
            },
        }
    },
});

theme = responsiveFontSizes(theme);

export default function Layout() {
    return (
        <ThemeProvider theme={theme}>
        <Box>
            <CssBaseline/>
            <GlobalStyle/>
            <ParticlesBackground/>
            <Box>
                <Dashboard/>
                <Header/>
                <About/>
                <Portfolio/>
                <Contact/>
            </Box>
        </Box>
        </ThemeProvider>
    )
}