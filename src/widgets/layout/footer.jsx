import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa"; // Import icons
import { Grid, Card, CardContent, Dialog, DialogContent } from "@mui/material";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6" style={{backgroundColor:"#28282c", color:"#ffffff"}}>
      <div className="container mx-auto">
        {/* <div>
          <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img src="/img/Logo.png" width="160px" height="auto" alt="Everest Logo" />
          </div>
          <div style={{fontFamily: "futura-lt-w01-book,futura-lt-w05-book,sans-serif", textAlign:"center"}}>
            <Typography>1923 Baltimore-Reynoldsburg Rd, Reynoldsburg, OH 43068, United States</Typography>
            <Typography>+1 (740) 918-9526</Typography>
            <Typography>lalas2barbershop@gmail.com</Typography>
          </div>
        </div> */}


        <Grid container spacing={2}>
          <Grid item md="4">
            <Grid container spacing={2} direction="column">
              <Grid item><img src="/img/Logo.png" width="80px" height="auto" alt="Everest Logo" /></Grid>
              <Grid item><Typography> © {year} Everest Kala Kendra</Typography></Grid>
              <Grid item>
                <Grid container spacing={4}>
                  <Grid item><a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer"><FaTiktok className="w-6 h-6  hover:text-pink-500 transition-colors" /></a></Grid>
                  <Grid item><a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><FaFacebook className="w-6 h-6  hover:text-blue-600 transition-colors" /></a></Grid>
                  <Grid item><a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram className="w-6 h-6  hover:text-purple-500 transition-colors" /></a></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md="4">
            <Grid container spacing={2} direction="column">
              <Grid item>Home</Grid>
              <Grid item>Blog</Grid>
              <Grid item>Support</Grid>
              <Grid item>Contact</Grid>
            </Grid>
          </Grid>
          <Grid item md="4">
            <Grid container spacing={2} direction="column">
              <Grid item><Typography variant="h4">Never miss a step.</Typography></Grid>
              <Grid item><Typography >Get the latest CLI updates, exclusive events, and more.</Typography></Grid>
            </Grid>
          </Grid>
        </Grid>

        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright || `Copyright © ${year} Everest Kala Kendra`}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ... rest of your code remains the same ...