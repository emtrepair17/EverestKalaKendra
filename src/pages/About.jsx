import React from "react";
import { Typography, Box, useTheme, useMediaQuery, Grid, Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export function About() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const paragraph = 
    "Welcome to LALAS2 Barber Shop LLC(Inside Famous Barber), where precision meets style, and grooming becomes an experience. We are a modern, faith-driven barbershop with a commitment to offering the highest quality haircuts, fades, and grooming services in a warm and friendly environment. Our expert barbers are dedicated to crafting hairstyles that are as unique as you are, paying attention to every detail to ensure you leave feeling refreshed, confident, and looking your absolute best." +
    "At LALAS2, we believe that a great haircut is more than just a service; it's an art. Our passion for styling, combined with years of experience, ensures that we provide not only impeccable haircuts but also a personal touch that makes you feel right at home. Whether you're coming in for a classic trim, a bold new color, or a beard grooming session, we treat every client with respect, care, and a focus on delivering excellence." +
    "More than just a barbershop, LALAS2 is a place where community, faith, and style come together. We’ve built our business on these core values to create a space where everyone feels valued, inspired, and ready to take on the world with a fresh new look.";

  const Why = [
    "Skilled and Experienced Barbers",
    "Personalized Service",
    "Comprehensive Services",
    "Family-Friendly Environment"
  ]
  const Why2 = [
    "Precision & Attention to Detail",
    "Faith-Driven Values",
    "Up-to-Date Trends & Techniques",
    "Comfortable, Relaxing Experience"
  ]

  return (
    <>
      <div  style={{ backgroundColor:"#ffffff"}}>
      <Grid container spacing={4}>
        <Grid item sx={12} md={8}><Typography variant="h1" sx={{ fontWeight: '300' }}>Inspiring Nepali Dance, Creativity & Cultural Pride</Typography></Grid>
        <Grid item sx={12} md={4}>
          <Grid container spacing={6} direction="column">
            <Grid item><Typography variant="h5">Since our beginning, Everest Kala Kendra has been a home for Nepali dance, culture and creativity — inspiring learners to express, perform and connect.</Typography></Grid>
            <Grid item>
              <Button endIcon={<ArrowDownwardIcon />} size="large" sx={{color:"black"}}>Explore More</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
        
      <Box mt={8}><img src="/img/home7.jpg" width="100%" height="auto" /></Box>

      <Box mt={10}><Typography variant="h2" sx={{ fontWeight: '300' }}>Everest Kala Kendra was born from a vision to preserve Nepali culture and empower learners through dance, creativity, and artistic expression.</Typography></Box>  



      </div>
    </>
  );
}

export default About;