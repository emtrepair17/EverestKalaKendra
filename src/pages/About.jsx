import React from "react";
import { Typography, Box, useTheme, useMediaQuery, Grid, Button } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export function About() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const coreValues = [
    { 
      title:"Cultural Preservation", 
      desc:"Honoring and sustaining Nepali heritage, music, and traditional art forms."
    },
    { 
      title:"Artistic Excellence", 
      desc:"Encouraging creativity, discipline and continuous growth in performance skills."
    },
    { 
      title:"Community Connection", 
      desc:"Bringing people together through dance, festivals and shared cultural experiences"
    },
    { 
      title:"Youth Empowerment", 
      desc:"Nurturing young talent with confidence, leadership and stage presence."
    },
    { 
      title:"Passion & Integrity", 
      desc:"Teaching with dedication, honesty and respect for every learner’s journey."
    }
  ]

  return (
    <>
      <div style={{ backgroundColor: "#ffffffff" }}>
        <Grid container spacing={4}>
          <Grid item sx={12} md={8}><Typography variant="h1" sx={{ fontWeight: '300' }}>Inspiring Nepali Dance, Creativity & Cultural Pride</Typography></Grid>
          <Grid item sx={12} md={4}>
            <Grid container spacing={6} direction="column">
              <Grid item><Typography variant="h5">Since our beginning, Everest Kala Kendra has been a home for Nepali dance, culture and creativity — inspiring learners to express, perform and connect.</Typography></Grid>
              <Grid item>
                <Button endIcon={<ArrowDownwardIcon />} size="large" sx={{ color: "black" }}>Explore More</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box mt={8}><img src="/img/home7.jpg" width="100%" height="auto" /></Box>

        <Box mt={10} ml={!isMobileView && 15} mr={!isMobileView && 15}><Typography variant="h2" sx={{ fontWeight: '300' }}>Everest Kala Kendra was born from a vision to preserve Nepali culture and empower learners through dance, creativity, and artistic expression.</Typography></Box>

        <Box ml={!isMobileView && 30} mr={!isMobileView && 15} mt={10}>
          <Grid container spacing={4} direction="column">

            <Grid item>
              <img src="/img/img10.jpg" style={{ borderRadius: "20px" }} />
            </Grid>

            <Grid item>
              <Grid container spacing={2} direction="column">
                <Grid item><Typography variant="h4">OUR MISSION</Typography></Grid>
                <Grid item><Typography variant="h6">Preserving Culture Through Dance & Creativity</Typography></Grid>
                <Grid item><Typography>We cultivate a nurturing space where individuals can learn, express and grow through Nepali dance and performing arts — promoting cultural identity, confidence, discipline and community connection through movement and expression.</Typography></Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container spacing={2} direction="column">
                <Grid item><Typography variant="h4">OUR VISION</Typography></Grid>
                <Grid item><Typography variant="h6">Inspiring a Global Love for Nepali Art & Heritage</Typography></Grid>
                <Grid item><Typography>We aim to be a leading hub for Nepali art and dance, empowering future generations to embrace their roots, celebrate cultural pride and take Nepali creativity to global stages with elegance, talent and unity.</Typography></Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container spacing={2} direction="column">
                <Grid item><Typography variant="h4">CORE VALUES</Typography></Grid>
                <Grid item>


                  {coreValues.map((el)=><>
                    <Accordion>
                    <AccordionSummary
                      expandIcon={<ArrowDownwardIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span" variant="h3">{el.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {el.desc}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  </>)}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

      </div>
    </>
  );
}

export default About;