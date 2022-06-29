import React, {useState} from 'react';
// Styles
import {AboutStyles} from '../styles/AboutStyles';
// Components
import Title from '../components/Title';
import UnderlineTitle from '../components/UnderlineTitle';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
// Icons
import HexagonIcon from '@mui/icons-material/Hexagon';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
// Variants Framer Motion
import {motion, AnimatePresence} from 'framer-motion';
import {titlePage, skillsContainer} from '../variants/Variants';
// Other
import {scrollSmoothTo} from '../functions/functions'
import { Waypoint } from 'react-waypoint';
import {ids,titles,descriptions,icons,items} from '../components/IconsWithDescription';
import IconsWithDescription from '../components/IconsWithDescription';
import {idsSkills,names,percentages,values,css,skills} from '../components/ProgressList';


export default function About(props) {
    // Queries
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    // Mobile Icon Divider
    const [iconDown, setIconDown] = useState(true);

    return (
        <Box className={isMobile ? "pages content" : "pages contentDesktop"} id="about">
        <AboutStyles/>
            <Box className='containerBox'>
            {/* Title and Underline */}
            <Box>
                <Title title={"ABOUT"} color={"titlePage"} />
                <UnderlineTitle className={"underline"}/>
            </Box>
            {/* Set Icon Down and Up */}
            <Waypoint
                onEnter={() => setIconDown(true)}
                onLeave={() => setIconDown(false)}
            />

            {/* Icons and Description */}
            <IconsWithDescription/>
            </Box>

            {/* Button Divider Mobile */}
            {
                isMobile ?
                <IconButton className="iconDivider" color="secondary" sx={{ mt: {xs: 8, sm: 18,}}} onClick={() => {iconDown ? scrollSmoothTo('image') : scrollSmoothTo('about')}}>
                    <ArrowDownwardIcon className={iconDown ? 'iconUpDivider' : 'iconDownDivider'}/>
                </IconButton>
                :
                null
            }

            {/* Image Profile & Skills */}
            <Box className='containerBox' id='image'>
            <Grid container mt={4} className="containerImageSkills">
                <Grid item xs={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <HexagonIcon color="secondary" className="imageContainerAbout" sx={{bottom: {md: '1rem'}}}/>
                            <Box sx={{position: 'relative', bottom: {xs: '2.5rem', sm: '2rem',md: '3.95rem',lg: '1.8rem'}}}>
                                <Typography variant='subtitles'>Who am I?</Typography>
                                <Typography component="p" variant='description'>I'm Full Stack Developer. I'm passionate about UI effects, animations and creating intuitive, dynamical user experiences.</Typography>
                                <Typography component="p" variant="description" color="secondary" sx={{cursor: 'pointer'}} onClick={() => {scrollSmoothTo('contact')}}>Let's work togethers.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{position: 'relative',mt:{md: 6, lg: 10, }, bottom:{xs: '4.5rem', sm: '3.5rem'}}}>
                        {
                            skills.map(skill => (
                            <Box className='skillsContainerAbout' key={[skill.id]}
                            component={motion.div}
                            variants={skillsContainer}
                            whileInView="whileInView"
                            animate="animate"
                            >
                                <Box className="skillsName">
                                    <Typography variant='skillsTitle' color="primary">{skill.name}</Typography>
                                </Box>
                                <Box className="skillsProgressContainer">
                                    <LinearProgress className="skillsLinearProgress" variant="determinate" value={skill.value} color="secondary"/>
                                    <LinearProgress className="skillsLinearProgress2" style={skill.css} variant="indeterminate" color="blue"/>
                                </Box>
                                {
                                    isMobile ? null :
                                    <Box className="skillsPorcentage" sx={{right: { md: '1.7rem' ,lg: '2.3rem'}}}>
                                        <Typography variant="percentage" color="titlePage">{skill.percentage}</Typography>
                                    </Box>
                                }
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </Box>
    )
}

