import React from 'react';

// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Portfolio() {
    return (
        <Box className='pages portfolio' id="portfolio">
            <Box className='dashboardBox'>
                <Typography component="h2" variant="titlePages" color="titlePage">PORTFOLIO</Typography>
                <Box className="underline"></Box>
                <Box>
                    <Typography>All</Typography>
                    <Typography>React/JS</Typography>
                    <Typography>Symfony</Typography>
                    <Typography>All</Typography>
                </Box>
            </Box>
        </Box>
    )
}