import React from 'react';
// Styles
import {ContactStyles} from '../styles/ContactStyles';
// Components
import Title from '../components/Title';
import UnderlineTitle from '../components/UnderlineTitle';
import CarouselImages from '../components/Carousel';
// Mui Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

// Icons
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
// Others
import {motion} from 'framer-motion';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {scrollSmoothTo} from '../functions/functions';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#0283a5',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
        borderColor: '#041C32',
        borderWidth: '2px',
        },
        '&:hover fieldset': {
            borderColor: '#0283a5',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#041C32',
        },
    },
});

const validationSchema = yup.object({
    name: yup
      .string('Enter your Name')
      .min(3, 'Name should be of minimum 3 characters length')
      .required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your message')
      .min(8, 'Message should be of minimum 8 characters length')
      .required('Message is required'),
});

export default function Contact() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    // Queries
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    
    return (
    <Box className="pages" style={{flexDirection: 'column'}}>
    <ContactStyles/>
    <Box id="contact" className={isMobile ? 'contact content' : 'contact contentDesktop'}>
        {/* Title */}
        <Box style={{display:'block', justifyContent:'center', alignItems: 'center', flex: 1, width: '100%'}}>
            <Title title={"CONTACT"} color={"primary"} />
            <UnderlineTitle className={"underlineWhite"}/>
        </Box>
        {/* Content */}
        <Grid container justifyContent="center" alignItems="center">
            <Grid item lg={12}>
                <Grid container columnSpacing={{ xs: 2,sm:6, md: 9, lg: 12 }} justifyContent="center" alignItems="center">
                    {/* Form */}
                    <Grid item xs={12} lg={6}>
                        <Box className="formContainer center" sx={{padding:{xs: '3.8rem', sm:'4.5rem'}}} component={motion.div} whileInView={{x:0}} animate={{x:-300}}>
                            <form onSubmit={formik.handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent: 'center', width: '100%', padding: 16}}>
                                <CssTextField
                                    className="inputForm"
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                                <CssTextField
                                    className="inputForm"
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                                <CssTextField
                                    className="inputForm"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    maxRows={4}
                                    id="message"
                                    name="message"
                                    label="Message"
                                    variant="outlined"
                                    type="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    error={formik.touched.message && Boolean(formik.errors.message)}
                                    helperText={formik.touched.message && formik.errors.message}
                                />
                                <Button color="secondary" variant="contained" fullWidth type="submit">
                                    Submit
                                </Button>
                            </form>
                        </Box>
                    </Grid>
                    {/* Slider Photos */}
                    <Grid item xs={12} lg={6}>
                        <Box className="sliderContainer center" component={motion.div} whileInView={{y:0}} animate={{y:100}}>
                            <CarouselImages/>
                        </Box>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </Box>
    {/* Footer */}
    <Box className="footer">
    <Fab
        component={motion.button}
        className="buttonContainerTop"
        color="primary"
        aria-label="add"
        onClick={() => {scrollSmoothTo('dashboard')}}
        whileHover={{rotate: 360, scale: 1.2, transition: {duration: 0.7}}}
        transition={{duration: 0.4}}>
        <Box className="bar"></Box>
            <ArrowCircleUpIcon
            component={motion.svg}
            className="buttonTop"
            whileHover={{transition: {duration: 0.7}}}
            transition={{duration: 0.4}}
            />
    </Fab>
        <Box className="iconsButtonContainerMedia center">
            <IconButton className="buttonWrap instagram">
            <Box className="buttonInnerWrap instagramBg">
                <InstagramIcon className="iconButtonMedia active"/>
                <InstagramIcon className="iconButtonMedia inactive"/>
            </Box>
            </IconButton>
            <IconButton className="buttonWrap linkedin">
            <Box className="buttonInnerWrap linkedinBg">
                <LinkedInIcon className="iconButtonMedia active"/>
                <LinkedInIcon className="iconButtonMedia inactive"/>
            </Box>
            </IconButton>
            <IconButton className="buttonWrap github">
            <Box className="buttonInnerWrap githubBg">
                <GitHubIcon className="iconButtonMedia active"/>
                <GitHubIcon className="iconButtonMedia inactive"/>
            </Box>
            </IconButton>
        </Box>
        <Typography className="copyRight" component={motion.p} color="primary">Leonel Denett ©2022</Typography>

    </Box>
    </Box>
  )
}
