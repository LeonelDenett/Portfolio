import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import {motion} from "framer-motion";
import Grid from '@mui/material/Grid';

const itemData = [
    {
      img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Breakfast',
      bgColorDirection: 'bgColor bgColorUp',
      boxDirection: 'box boxDown',
    },
    {
      img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Burger',
      bgColorDirection: 'bgColor bgColorDown',
      boxDirection: 'box boxUp',
    },
    {
      img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Camera',
      bgColorDirection: 'bgColor bgColorUp',
      boxDirection: 'box boxDown',
    },
    {
      img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Coffee',
      bgColorDirection: 'bgColor bgColorDown',
      boxDirection: 'box boxUp',
    },
    {
      img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Hats',
      bgColorDirection: 'bgColor bgColorUp',
      boxDirection: 'box boxDown',
    },
    {
      img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Honey',
      bgColorDirection: 'bgColor bgColorDown',
      boxDirection: 'box boxUp',
    },
    {
      img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Basketball',
      bgColorDirection: 'bgColor bgColorUp',
      boxDirection: 'box boxDown',
    },
    {
      img: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Fern',
      bgColorDirection: 'bgColor bgColorDown',
      boxDirection: 'box boxUp',
    },
  ];

export default function MediaCard() {
    return (
        <Box className="mediaCardContainer">
            <Grid container rowSpacing={{xs: 2, md: 3, lg: 4}} columnSpacing={{ xs: 2, md: 3, lg: 4 }}>
            {itemData.map((item) => (
                <Grid item xs={12} sm={6} lg={4}>
                <Card className='cardContainer' component={motion.div} whileHover={{scale: 1.05}}>
                    <CardActionArea className='action'>
                    <CardMedia
                        className='media'
                        image={item.img}
                        alt={item.title}
                    />
                    <motion.div className={item.bgColorDirection}
                    ></motion.div>
                    <motion.div className={item.boxDirection}>
                    <motion.div className='circle'>
                        <motion.h2>Hey Click me</motion.h2>
                        </motion.div>
                    </motion.div>
                    </CardActionArea>
                </Card>
                </Grid>
            ))}
            </Grid>
        </Box>
    );
}