import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Grid, Card, CardContent, Dialog, DialogContent } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import InstructorCard from "@/components/card/InstructorCard";
import ReactPlayer from "react-player";
import StudentReview from "@/components/slidingcontent/SrudentReview";

const imgGalary = [
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
      <Grid container spacing={2} marginTop={1}>
        <Grid item xs={6}>
          <Card style={{ height: "100%", color: "white", backgroundColor: "#030511" }}>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%", // make CardContent fill the Card
                padding: "16px", // optional
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                LEVEL UP YOUR DANCING
              </Typography>

              <Typography>
                Train with the world’s top choreographers. Get on-demand online
                dance classes right from your home.
              </Typography>

              <Typography>
                Train with the world’s top choreographers. Get on-demand online
                dance classes right from your home.
              </Typography>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={6}>
          <Card style={{ height: "100%" }}>
            <img
              src="/img/img1.jpg"
              alt="Dance"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
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
                    <Grid item xs={12} sm={6} md={4} key={index}>
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
                <Typography variant="h5" fontWeight="bold">
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
        <Grid container spacing={2} direction="column">
          <Grid item sx={12}><Typography sx={{ textAlign: "center" }} variant="h4" fontWeight="bold">Classes In Every Major Dance Style</Typography></Grid>
          <Grid item sx={12}>
            <ReactPlayer
              url="http://youtube.com/watch?v=tV2mf4bHzXQ"
              controls
              width="100%"
              height="400px"
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ pt: 7,color: "#ffffff" }}>
        <Grid item sx={12}><Typography sx={{ textAlign: "center" }} variant="h4" fontWeight="bold">What our dance students are saying</Typography></Grid>
        <StudentReview/>
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
