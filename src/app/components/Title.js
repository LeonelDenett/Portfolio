import React from 'react';
// Mui Components
import Typography from '@mui/material/Typography';
// Variants motion
import {titlePage} from '../variants/Variants';
// Other
import {motion} from 'framer-motion';


export default function Title({title, color}) {
    return (
        <Typography variant="titlePages" color={color} component={motion.h2} variants={titlePage} whileInView="whileInView" animate="animate">{title}</Typography>
    )
}