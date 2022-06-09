import React, {useState} from 'react';
// Components
import TemporaryDrawer from './Drawer';
// MUI Components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
// Others
import { Waypoint } from "react-waypoint";
import Scrollspy from 'react-scrollspy'
import {scrollSmoothTo} from '../functions/functions';
import {motion} from 'framer-motion'

export default function Header() {
    // Set up NavBar
    const [topNavbarHide, setTopNavbarHide] = useState(true);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <>
        {
        isMobile ?
        <TemporaryDrawer/>
        :
        <AppBar position="fixed" className="navBar">
            <Toolbar className={topNavbarHide ? "navBarDesktop" : "hide"}>
				<Scrollspy items={['dashboard', 'about', 'portfolio', 'contact']} currentClassName="currentLink" className='containerNavBarDesktop'>
					<Typography component="a" variant='navLinks' color="primary" onClick={() => {scrollSmoothTo('dashboard')}}>Dashboard</Typography>
					<Typography component="a" variant='navLinks' color="primary" onClick={() => {scrollSmoothTo('about')}}>About</Typography>
					<Typography component="a" variant='navLinks' color="primary" onClick={() => {scrollSmoothTo('portfolio')}}>Portfolio</Typography>
					<Typography component="a" variant='navLinks' color="primary"  onClick={() => {scrollSmoothTo('contact')}}>Contact</Typography>
				</Scrollspy>
            </Toolbar>
        </AppBar>
        }
        <Waypoint
        scrollableAncestor={window}
            onEnter={() => setTopNavbarHide(true)}
            onLeave={() => setTopNavbarHide(true)}
        />
        </>
    )
}