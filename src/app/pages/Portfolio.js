import React from 'react';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Others
import {motion} from 'framer-motion';
import MediaCard from '../components/Projects';

export default function Portfolio() {
    return (
        <Box id="portfolio" className="pages portfolio">
            <Box style={{display:'block', justifyContent:'center', alignItems: 'center', flex: 1, width: '100%'}}>
                <Typography component={motion.h2} whileInView={{y:0}} animate={{y:100}} transition={{duration: 0.5, type: 'spring', stiffness: 60}} variant="titlePages" color="titlePage">PORTFOLIO</Typography>
                <Box component={motion.div} whileInView={{x:0}} animate={{x:-600}} transition={{duration: 0.5, type: 'spring', stiffness: 60}} className="underline"></Box>
            </Box>

            <Box
                component={motion.div}
                whileInView={{x:0, y:0}}
                animate={{y:-100}}
                transition={{duration: 0.5, type: 'spring', stiffness: 60}}
                style={{width: '100%', marginTop: '3rem', marginBottom: '3rem'}}>
                <MediaCard/>
            </Box>
        </Box>
    )
};
