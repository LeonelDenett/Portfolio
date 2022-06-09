import React from 'react'
// Mui Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
// Icons
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <Box className="footer">
            <Box>
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
    </Box>
  )
}