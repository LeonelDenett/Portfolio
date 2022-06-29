import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FondoMessi from '../images/FondoMessi.jpg';

// Icons Mui Elements
import IconButton from '@mui/material/IconButton';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// Others
import {motion} from 'framer-motion';

export default function CarouselImages(props)
{
    var items = [
        {
            name: "Random Name #1",
            url: FondoMessi,
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Probably the most random thing you have ever seen!",
            url: FondoMessi,
        },
        {
            name: "Random Name #2",
            description: "Probably the most random thing you have ever seen!",
            url: FondoMessi,
        },
        {
            name: "Random Name #2",
            description: "Probably the most random thing you have ever seen!",
            url: FondoMessi,
        }
    ]

    return (
        <Box style={{width: '100%'}}>
            <Paper className="paper" elevation={6}>
        <Carousel
            className="bgImage"
            PrevIcon={<IconButton><ArrowBackIosRoundedIcon whileHover={{rotate: 360, transition: {duration: 0.4}}} color="primary" component={motion.svg}/></IconButton>}
            NextIcon={<IconButton><ArrowForwardIosRoundedIcon whileHover={{rotate: 360, transition: {duration: 0.4}}} color="primary"  component={motion.svg}/></IconButton>}
            indicatorIconButtonProps={{
                style: {
                    padding: '10px',
                    zIndex: 50,
                    position: 'relative',
                    bottom: '3rem',
                }
            }}
            indicatorContainerProps={{
                style: {
                    margin: '0px', // 5
                    textAlign: 'center', // 4
                    zIndex: 50,
                }
            }}
            navButtonsAlwaysVisible={true}
            navButtonsWrapperProps={{
                className: 'buttontestContainer',
            }}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </Paper>
        </Box>
    )
}

function Item(props)
{
    return (
        <Box className="center">
            <img className="image" src={props.item.url}  />
        </Box>
        
    )
}
// export default function Carousel() {
//     return (
//         <Example/>
//     )
// }