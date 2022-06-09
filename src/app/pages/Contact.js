import React from 'react';
// Mui Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
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
      .email('Enter a valid Name')
      .required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
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
    
    return (
        <Box className="pages" style={{flexDirection: 'column'}}>
    <Box id="contact" className="contact">
        <Box style={{display:'block', justifyContent:'center', alignItems: 'center', flex: 1, width: '100%'}}>
            <Typography component={motion.h2} whileInView={{y:0}} animate={{y:100}} transition={{duration: 0.5, type: 'spring', stiffness: 60}} variant="titlePages" color="primary">CONTACT</Typography>
            <Box component={motion.div} whileInView={{x:0}} animate={{x:-600}} transition={{duration: 0.5, type: 'spring', stiffness: 60}} className="underline lineWhite"></Box>
        </Box>

        <Grid container justifyContent="center" alignItems="center">
            <Grid item lg={12}>
                <Grid container columnSpacing={{ xs: 2, md: 3, lg: 4 }} justifyContent="center" alignItems="center">
                    <Grid item lg={6}>
                        <Box className="formContainer" component={motion.div} whileInView={{x:0}} animate={{x:-300}}>
                            <form onSubmit={formik.handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent: 'center'}}>
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
                    <Grid item lg={6}>
                        <Box style={{backgroundColor: 'white', padding: '2rem'}} component={motion.div} whileInView={{y:0}} animate={{y:300}}>
                            <img src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" className="bgTest"/>
                            <img src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" className="test" />
                        </Box>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </Box>
    <Box className="footer">
    <Fab style={{position:'relative', bottom: '4.3rem'}} color="primary" aria-label="add">
        <ArrowCircleUpIcon />
    </Fab>
        <Box style={{position:'absolute', }} >
            <IconButton>
                <InstagramIcon/>
            </IconButton>
            <IconButton>
                <LinkedInIcon/>
            </IconButton>
            <IconButton>
                <GitHubIcon href="https://github.com/LeonelDenett" />
            </IconButton>
        </Box>
        <Typography component={motion.p}>Leonel Denett</Typography>
    </Box>

    </Box>

    
  )
}
