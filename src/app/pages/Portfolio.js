import React from 'react';
// Components
import Title from '../components/Title';
import UnderlineTitle from '../components/UnderlineTitle';
// Styles
import {PortfolioStyles} from '../styles/PortfolioStyles';
// Mui Components
import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
// Variants Framer Motion
import {motion} from 'framer-motion';
import {portfolioContainer} from '../variants/Variants';
// Others
import MediaCard from '../components/Projects';

export default function Portfolio() {
    // Queries
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box id="portfolio" className={isMobile ? "pages content portfolio" : "pages contentDesktop portfolio"}>
        <PortfolioStyles/>
            {/* Title */}
            <Box>
                <Title title={"PORTFOLIO"} color={"titlePage"} />
                <UnderlineTitle className={"underline"}/>
            </Box>
            {/* Content */}
            <Box
                component={motion.div}
                variants={portfolioContainer}
                whileInView="whileInView"
                animate="animate"
                className="portfolioContainer"
                >
                <MediaCard/>
            </Box>
        </Box>
    )
};
