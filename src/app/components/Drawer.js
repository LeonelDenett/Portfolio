import React, {useState} from 'react';
// MUI Components
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
// Icons
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// Others
import Scrollspy from 'react-scrollspy'
import { scrollSmoothTo } from '../functions/functions';

export default function TemporaryDrawer() {
    // Drawer Set Up
    const [state, setState] = useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        };
        setState({ ...state, [anchor]: open });
    };

    const data = [
        {name: 'Dashboard', to: 'dashboard'},
        {name: 'About', to: 'about'},
        {name: 'Portfolio', to: 'portfolio'},
        {name: 'Contact', to: 'contact'},
    ]

    const uniqueData = [...new Set(data)]

    return (
        <AppBar>
            <Toolbar className="navBarMobile">
                <Box>
                    {['bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <IconButton aria-label="Example" onClick={toggleDrawer(anchor, true)}>
                            <MenuIcon color="primary" />
                        </IconButton>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            <Box
                                sx={{ width: anchor === 'bottom' || anchor === 'bottom' ? 'auto' : 250 }}
                                className="listContainer"
                            >
                                <List>
                                <Scrollspy items={['dashboard', 'about', 'portfolio', 'contact']} currentClassName="currentLink">
                                {data.map((link) => (
                                    <ListItem key={[link.name]} disablePadding>
                                        <Typography my={1.5} component="a" key={[link.name]} onClick={() => {scrollSmoothTo([link.to])}}>{link.name}</Typography>
                                    </ListItem>
                                ))}
                                </Scrollspy>
                                </List>
                            </Box>
                        </Drawer>
                    </React.Fragment>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};