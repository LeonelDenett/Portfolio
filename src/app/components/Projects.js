import React, {useState} from "react";
// Mui Components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// Icons Mui Elements
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// Variants Framer Motion
import {motion} from "framer-motion";
import {portfolioItem} from '../variants/Variants';
// Images
import Maquette from '../images/Maquette.jpg';
import Stéopathie from '../images/Andrea.jpg';
import BBQMaster from '../images/BBQMaster.png';
import Médiathèque from '../images/Médiathèque.jpeg';
import CharlesCantin from '../images/CharlesCantin.jpg';
import Vista from '../images/Vista.jpg';

export default function MediaCard() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <Box className="mediaCardContainer">
            <Grid container>
                <Grid item>
                    <CardList/>
                </Grid>
            </Grid>
        </Box>
    );
}

function CardList() {
    return (
        <CardContainer/>
    );
}

function CardContainer() {
    const itemData = [
            {
                id: 1,
                img: BBQMaster,
                title: 'BBQ Master',
                subtitle: 'BARBECUE RECIPES MOBILE APPLICATION.',
                description: 'BBQ Master is a mobile application where you will find the best recipes for the grill and tips.',
                skills: 'React Native/Firebase',
                bgColorDirection: 'bgColor bgColorUp',
                boxDirection: 'box boxDown',
            },
            {
                id: 2,
                img: Stéopathie,
                title: 'Stéopathie Andréa',
                subtitle: 'centre de stéopathie',
                description: 'Andrea, fraîchement diplômée, ouvre son site pour entrer sur le marché du travail.',
                skills: 'React/Node.js',
                bgColorDirection: 'bgColor bgColorDown',
                boxDirection: 'box boxUp',
            },
            {
                id: 3,
                img: CharlesCantin,
                title: 'Charles Cantin',
                subtitle: 'Photograph',
                description: 'Static site of a fictional photographer.',
                skills: 'React',
                bgColorDirection: 'bgColor bgColorUp',
                boxDirection: 'box boxDown',
            },
            {
                id: 4,
                img: Médiathèque,
                title: 'Médiathèque',
                subtitle: 'médiathèque fictive.',
                description: 'Évaluation de la formation. Le but était de créer une médiathèque en utilisant une api pour importer les livres. L\'utilisateur peut se connecter pour accéder au contenu de la médiathèque.',
                skills: 'Symfony/React',
                bgColorDirection: 'bgColor bgColorDown',
                boxDirection: 'box boxUp',
            },
            {
                id: 5,
                img: Maquette,
                title: 'Clipboard',
                subtitle: 'Cross-platform mockup.',
                description: 'Mockup of a fictitious static site using Figma.',
                skills: 'Figma ',
                bgColorDirection: 'bgColor bgColorUp',
                boxDirection: 'box boxDown',
            },
            {
                id: 6,
                img: Vista,
                title: 'Vista',
                subtitle: 'Restaurant',
                description: 'Fictional restaurant with a static website.',
                skills: 'Next',
                bgColorDirection: 'bgColor bgColorDown',
                boxDirection: 'box boxUp',
            },
    ];

    return(
        <Grid container rowSpacing={{xs: 3, lg: 4}} columnSpacing={{ xs: 3, lg: 4 }}>
        {itemData.map((item) => (
            <Grid item xs={12} sm={6} lg={4}>
            <Box
            className="cardContainer"
            key={[item.id]}
            component={motion.div}
            layout
            >
                <CardItem {...item} />
            </Box>
            </Grid>
        ))}
        </Grid>
    );
}

function CardItem({img,bgColorDirection,boxDirection,id,title,subtitle,description,skills}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <Box
        layout
        component={motion.div}
        key={id}
        >
            <Card
            onClick={handleOpen}
            className="cardContainer"
            component={motion.div}
            variants={portfolioItem}
            whileHover="whileHover"
            >
            <CardActionArea className='action'>
                <CardMedia
                component={motion.div}
                layout
                className='photo'
                image={img}
            />
            <motion.div className={bgColorDirection}></motion.div>
            <motion.div className={boxDirection}>
                <motion.div className='circle'>
                    <Typography variant="description" color="primary">{title}</Typography>
                    <Typography color="secondary">{skills}</Typography>
                </motion.div>
            </motion.div>
            </CardActionArea>
        </Card>

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        >
            <Fade in={open}>
                <Box className="modal" sx={{width:{xs: '92%', lg: '50%'}}}>
                    <Card className="modalCard">
                        <CardMedia
                            component="div"
                            className='modalImage'
                            image={img}
                            alt="green iguana"
                        />
                        <CardContent className="modalContainerContent">
                            <Typography variant="subtitles" component="p" color="secondary">
                            {title}
                            </Typography>
                            <Typography variant="description" color="grey">
                            {subtitle}
                            </Typography>
                            <Divider sx={{my:2}}/>
                            <Typography variant="body2" color="text.secondary">
                            {description}
                            </Typography>
                        </CardContent>
                        <CardActions className="modalContainerButtons">
                            <Box className="modalButtons">
                                <Button variant='contained' size="large" color="secondary">Visit Site</Button>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon fontSize="large"/>
                                </IconButton>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            </Fade>
        </Modal>
        </Box>
    );
  }
