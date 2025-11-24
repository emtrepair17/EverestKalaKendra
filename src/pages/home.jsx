import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Grid, Card, CardContent, Dialog, DialogContent } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import InstructorCard from "@/components/card/InstructorCard";
import StudentReview from "@/components/slidingcontent/StudentReview";

const imgGalary = [
  { img: "/img/img1.jpg" },
  { img: "/img/img2.jpg" },
  { img: "/img/img3.jpg" },
  { img: "/img/img4.jpg" },
  { img: "/img/img5.jpg" },
  { img: "/img/img6.jpg" },
  { img: "/img/img1.jpg" },
  { img: "/img/img2.jpg" },
  { img: "/img/img3.jpg" },
  { img: "/img/img4.jpg" },
  { img: "/img/img5.jpg" },
  { img: "/img/img6.jpg" }
]

export function Home() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleClick = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  const Why = [
    "Classes designed to fit your schedule",
    "Variety of styles and levels",
    "New classes every week",
    "Learn dance fundamentals",
    "Improve technique",
    "Discover new styles",
    "Strength & cardio training",
    "World-renowned instructors",
    "Professional development & advice"
  ]

  return (
    <Box padding={5}>


     <Box
        sx={{
          textAlign: "center",
          py: 10,
          // px: 4,
          // mx: 4,
          position: "relative",
          overflow: "hidden",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: [
              'url("/img/img1.jpg")',
              'url("/img/img2.png")',
              'url("/img/img3.jpg")',
            ],
            backgroundSize: "cover",
            backgroundPosition: "center",
            // zIndex: -1,
            animation: "changeBackground 6s infinite",
          },
          "@keyframes changeBackground": {
            "0%": { backgroundImage: 'url("/img/img1.jpg")' },
            "33%": { backgroundImage: 'url("/img/img2.png")' },
            "66%": { backgroundImage: 'url("/img/img3.jpg")' },
            "100%": { backgroundImage: 'url("/img/img1.jpg")' },
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            // zIndex: -1,
          }}
        />

        <Box position="relative" zIndex={1}>
          <Typography
            variant="h1"
            sx={{ mb: 6, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "4rem" }, color: "white", fontFamily:"Optima" }} // Increased font size
          >
            EVEREST KALA KENDRA USA
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color: "white" }} // Increased font size
          >
            “नेपाली कला र संस्कृतिको उत्थान, हाम्रो पहिचान”
          </Typography>
        </Box>
      </Box>


      <Grid container spacing={2} marginTop={1}>
        <Grid item xs={4}>
          <Card style={{ height: "100%", color: "white", backgroundColor: "#030511" }}>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                padding: "16px",
              }}
            >
              <Typography variant="h4" fontWeight="bold">
                LEVEL UP YOUR DANCING
              </Typography>

              <Typography variant="h6">
                Train with the world’s top choreographers. Get on-demand online
                dance classes right from your home.Train with the world’s top choreographers. Get on-demand online
                dance classes right from your home.Train with the world’s top choreographers. Get on-demand online
                dance classes right from your home.
              </Typography>

              <Typography>
                Unlimited access for $100/month, billed monthly
              </Typography>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={8}>
          <Card style={{ height: "100%" }}>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/tV2mf4bHzXQ?autoplay=1&mute=1&controls=0&rel=0"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
              ></iframe>
            </div>

          </Card>
        </Grid>
      </Grid>

      <Box sx={{ pt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card style={{ height: "100%", backgroundColor: "#030511" }}>
              <CardContent>
                <Grid container spacing={2}>
                  {imgGalary.map((el, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <img
                        src={el.img}
                        alt={`Gallery ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleClick(el.img)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card style={{ height: "100%", backgroundColor: "#030511", color: "#ffffff" }}>
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%", // make CardContent fill the Card
                  padding: "16px", // optional
                }}
              >
                <Typography variant="h4" fontWeight="bold">
                  Choose from 1,000+ On-Demand Dance Classes
                </Typography>

                <Typography>
                  CLI Studios is for dancers, by dancers. Learn at your pace on your schedule with our library of online dance classes in every style and level.
                </Typography>

                <Typography>
                  <ul>
                    {Why.map((d, i) => (
                      <li key={`${d}-${i}`}><DoneIcon color="primary" />{d}</li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* <Box sx={{ pt: 7, color: "#ffffff" }}>
                <Grid container spacing={2} direction="column">
          <Grid item sx={12}><Typography sx={{ textAlign: "center" }} variant="h4" fontWeight="bold">Classes In Every Major Dance Style</Typography></Grid>
        </Grid>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/tV2mf4bHzXQ?autoplay=1&mute=1&controls=0&rel=0"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          ></iframe>
        </div>
      </Box> */}


      <Box sx={{ pt: 7, color: "#ffffff" }}>
        <Grid container spacing={2} direction="column">
          <Grid item sx={12}><Typography sx={{ textAlign: "center" }} variant="h4" fontWeight="bold">Meet Our Instructors</Typography></Grid>
          <Grid item sx={12}><Typography sx={{ textAlign: "center" }}>Get exclusive dance classes every week from 300+ top instructors who’ve worked with Beyoncé, Justin Bieber,  Dancing with the Stars, So You Think You Can Dance, and more!</Typography></Grid>
          <Grid item sx={12}>
            <Grid container spacing={4}>
              <Grid item md={4}><InstructorCard name="Mukesh Adhikari" img="/img/img1.jpg" /></Grid>
              <Grid item md={4}><InstructorCard name="Mukesh Adhikari" img="/img/img1.jpg" /></Grid>
              <Grid item md={4}><InstructorCard name="Mukesh Adhikari" img="/img/img1.jpg" /></Grid>
            </Grid>

          </Grid>
        </Grid>
      </Box>

      <Box sx={{ pt: 7, color: "#ffffff" }}>
        <Grid item sx={12}><Typography sx={{ textAlign: "center" }} variant="h4" fontWeight="bold">What our dance students are saying</Typography></Grid>
        <StudentReview />
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent style={{ padding: 0 }}>
          <img
            src={selectedImg}
            alt="Enlarged"
            style={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>


    </Box>
  );
}

export default Home;
