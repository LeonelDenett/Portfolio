import React, {useState} from 'react';

// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
// Icons
import HexagonIcon from '@mui/icons-material/Hexagon';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
// Other
import {scrollSmoothTo} from '../functions/functions'
import { Waypoint } from 'react-waypoint';
import {motion} from 'framer-motion';

export default function About(props) {
    // Queries
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
    // Icons with Description
    const ids = [1,2,3,4];
    const titles = ['Fast', 'Intuitive', 'Responsive', 'Dynamic'];
    const descriptions = [ 'Fast load times and lag free interaction, my highest priority.', 'Strong preference for easy to use, intuitive UX/UI.',
                        'My layouts will work on any device, big or small.', 'Websites don\'t have to be static, I love making pages come to life.' ];
    const icons = [<SpeedIcon color="primary" className='iconAbout' />,<EmojiObjectsOutlinedIcon color="primary" className='iconAbout'/>,
                  <DevicesIcon color="primary" className='iconAbout'/>, <RocketLaunchIcon color="primary" className='iconAbout'/>];

    var items = ids.map((id, index) => {
        return {
          id: id,
          title: titles[index],
          description: descriptions[index],
          icon: icons[index],
        }
    });

    // Progress List
    const idsSkills = [1,2,3,4,5,6,7,8,9];
    const names = ['CSS', 'HTML', 'React', 'R/Native', 'Node.js', 'Symfony', 'UI Design', 'Figma'];
    const porcentages = ['90%', '90%', '80%', '70%', '60%', '70%' , '70%', '60%'];
    const values = [90,90,80,70,60,70,70,60];
    const css = [
        {width: '90.1%'},
        {width: '90.1%'},
        {width: '80.1%'},
        {width: '70.1%'},
        {width: '60.1%'},
        {width: '70.1%'},
        {width: '70.1%'},
        {width: '60.1%'}
    ];

    var skills = idsSkills.map((id, index) => {
        return {
            id: id,
            name: names[index],
            porcentage: porcentages[index],
            value: values[index],
            css: css[index]
        }
    });

    const [iconDown, setIconDown] = useState(true);

    return (
        <Box className='pages about' id="about">
            <Box className='containerBox'>
            <Typography variant="titlePages" color="titlePage" id="abouttitle" component={motion.h2} whileInView={{y:0}} animate={{y:100}} transition={{duration: 0.5, type: 'spring', stiffness: 60}}>ABOUT</Typography>
            <Box className="underline" component={motion.div} whileInView={{x:0}} animate={{x:-600}} transition={{duration: 0.5, type: 'spring', stiffness: 60}}></Box>
            <Waypoint
                onEnter={() => setIconDown(true)}
                onLeave={() => setIconDown(false)}
            />
            <Grid container mt={4} sx={{paddingX: {lg:'10%'}}} rowSpacing={6} columnSpacing={{ xs: 3 }}>
            {items.map(data => (
                <Grid item xs={6} md={3} key={[data.id]}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={10}>
                        <Grid container>
                        <Grid item xs={12}>
                            <Box className="iconContainerAbout">
                                <HexagonIcon color="secondary" className="iconHexagoneAbout"/>
                                {data.icon}
                            </Box>
                            <Box>
                                <Typography variant="subtitles">{data.title}</Typography>
                                <Typography component="p" variant="description">{data.description}</Typography>
                            </Box>
                        </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
            </Grid>
            </Box>

            {/* Button Divider */}
            {
                isMobile ?
                <IconButton className="iconDivider" color="secondary" sx={{ mt: {xs: 8, sm: 12}}} onClick={() => {iconDown ? scrollSmoothTo('image') : scrollSmoothTo('about')}}>
                    <ArrowDownwardIcon className={iconDown ? 'iconUpDivider' : 'iconDownDivider'}/>
                </IconButton>
                :
                null
            }

            {/* Image Profile */}
            <Box className='containerBox' id='image'>
            <Grid container spacing={2} mt={4}>
                <Grid item xs={12}>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            <Grid container spacing={6} justifyContent="center" alignItems="center">
                                <Grid item xs={12} md={6}>
                                    <HexagonIcon color="secondary" className="imageContainerAbout" sx={{bottom: {md: '1rem'}}}/>
                                    <Box style={{position: 'relative'}} sx={{bottom: {xs: '2.5rem', sm: '2rem',lg: '1.8rem'}}}>
                                        <Typography variant='subtitles'>Who am I?</Typography>
                                        <Typography component="p" variant='description'>I'm Full Stack Developer. I'm passionate about UI effects, animations and creating intuitive, dynamical user experiences.</Typography>
                                        <Typography component="p" variant="description" color="secondary" style={{cursor: 'pointer'}} onClick={() => {scrollSmoothTo('contact')}}>Let's work togethers.</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} style={{position: 'relative'}} sx={{mt:{md: 2.6, lg: 6, }, bottom:{xs: '4.5rem', sm: '3.5rem'}}}>
                                {
                                skills.map(skill => (
                                    <Box className='skillsContainerAbout' key={[skill.id]}
                                    component={motion.div}
                                    whileInView={{x:0}}
                                    animate={{x:-300}}
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
                                        <Box className="skillsPorcentage" sx={{right: { md: '2rem' ,lg: '2.3rem'}}}>
                                            <Typography color="titlePage">{skill.porcentage}</Typography>
                                        </Box>
                                        }
                                    </Box>
                                ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </Box>
    )
}

