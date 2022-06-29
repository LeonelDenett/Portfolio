import React, {useState} from 'react';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// Variants Framer Motion
import {motion, AnimatePresence} from 'framer-motion';
import {IconsItems, IconsItemsSpeed,SpeedContainer} from '../variants/Variants';
// Icons Mui Elements
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import DevicesIcon from '@mui/icons-material/Devices';
import DevicesTwoToneIcon from '@mui/icons-material/DevicesTwoTone';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
// Icons
import HexagonIcon from '@mui/icons-material/Hexagon';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';

export default function IconsWithDescription() {

    const [isOnTop, setIsOnTop] = useState(false);
    const [isOnDown, setIsOnDown] = useState(false);
    const [isOnLeft, setIsOnLeft] = useState(false);
    const [isOnRight, setIsOnRight] = useState(false);

    function changeIsOnTop(){
        setIsOnTop(!isOnTop)
    };
    function changeIsOnDown(){
        setIsOnDown(!isOnDown)
    };
    function changeIsOnLeft(){
        setIsOnLeft(!isOnLeft)
    };
    function changeIsOnRight(){
        setIsOnRight(!isOnRight)
    };

const ids = [1,2,3,4];
const titles = ['Fast', 'Intuitive', 'Responsive', 'Dynamic'];
const descriptions = [ 'Fast load times and lag free interaction, my highest priority.', 'Strong preference for easy to use, intuitive UX/UI.',
                        'My layouts will work on any device, big or small.', 'Static Websites? Mmm... Noup. Let\'s animate them ' ];

const setIsOnAlls = [changeIsOnTop, changeIsOnDown, changeIsOnLeft, changeIsOnRight];

const icons = [
    // 1 Icon
    <IconButton className="HexagoneContainer">
        {isOnTop ?
        <SpeedRoundedIcon color="primary" className='iconAboutHover' component={motion.svg}
            key={isOnTop}
            variants={IconsItems}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .2 }}
        />
        :
        <SpeedRoundedIcon color="primary" className='iconAbout' component={motion.svg}
            variants={IconsItems}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .2 }}
        />
        }
    </IconButton>,
    // 2 Icon
    <IconButton className="HexagoneContainer">
        {isOnDown ?
        <EmojiObjectsIcon color="primary" className='iconAboutHover' component={motion.svg}
            key={isOnDown}
            variants={IconsItems}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .2 }}
        />
        :
        <EmojiObjectsOutlinedIcon color="primary" className='iconAbout' component={motion.svg}
            variants={IconsItems}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .2 }}
        />
        }
    </IconButton>,
    // 3 Icon
    <IconButton className="HexagoneContainer">
        {isOnLeft ?
        <DevicesTwoToneIcon color="primary" className='iconAboutHover' component={motion.svg}
            key={isOnLeft}
            variants={IconsItems}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .2 }}
            
        />
        :
        <DevicesIcon color="primary" className='iconAbout' component={motion.svg}
            variants={IconsItems}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .2 }}
            
        />
        }
    </IconButton>,
    // 4 Icon
    <IconButton className="HexagoneContainer">
        {isOnRight ?
        <RocketLaunchIcon color="primary" className='iconAboutHover' component={motion.svg}
        key={isOnRight}
        variants={IconsItems}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: .2 }}
        />
        :
        <RocketLaunchOutlinedIcon color="primary" className='iconAbout' component={motion.svg}
        variants={IconsItems}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: .2 }}
        />
        }
    </IconButton>,
];

var items = ids.map((id, index) => {
        return {
          id: id,
          title: titles[index],
          description: descriptions[index],
          icon: icons[index],
          setIsOnAll: setIsOnAlls[index],
        }
});

const [isOn, setIsOn] = useState(false);
    
    return(
        <Grid container mt={4} rowSpacing={6} columnSpacing={{ xs: 3 }}>
            {items.map(data => (
                <Grid item xs={6} md={3} key={[data.id]}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={10}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box className="iconContainerAbout">
                                    <Box
                                    className="HexagoneContainer"
                                    component={motion.div}
                                    whileHover={{scale: 1.08}}
                                    layout
                                    onMouseEnter={() => data.setIsOnAll(true)}
                                    onMouseLeave={() => data.setIsOnAll(false)}
                                    >
                                        <AnimatePresence exitBeforeEnter initial={false}>
                                            {data.icon}
                                        </AnimatePresence>
                                    </Box>
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
    )
}