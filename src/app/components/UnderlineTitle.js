import React from 'react';

// Mui Components
import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
// Others
import {motion} from 'framer-motion';
// Variants
import {underlineMobile, underlineDesktop} from '../variants/Variants';

export default function UnderlineTitle({className}) {
    // Queries
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box className={className} component={motion.div} variants={isMobile ? underlineMobile : underlineDesktop} whileInView="whileInView" animate="animate"></Box>
    )
}