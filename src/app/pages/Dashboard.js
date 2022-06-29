import React from 'react';
// Styles
import {DashboardStyles} from '../styles/DashboardStyles';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// Others
import {scrollSmoothTo} from '../functions/functions'

export default function Dashboard() {
    return (
        <Box className='pages dashboard' id="dashboard">
        <DashboardStyles/>
            <Box className='containerBox'>
                <Typography component="h1" variant='titleDashboard' color="primary">
                    Hello, I'm
                        <Typography variant='titleDashboard' color="secondary" style={{fontWeight: 'bold'}}> Leonel Denett</Typography>.<br/>
                    I'm full-stack web developer.
                </Typography>
                <Button className='dashboardButton' variant='outlined' onClick={() => {scrollSmoothTo('about')}} endIcon={<ArrowRightAltIcon className='dashboardIcon'/>}>View my work</Button>
            </Box>
        </Box>
    )
}
