
import * as React from 'react';
import { Card, CardMedia, Typography, CardContent, Grid, Box, useTheme } from '@mui/material';
import { Button } from '@material-tailwind/react';
import { loadStripe } from "@stripe/stripe-js";

const serviceData = [
    {
        title: "Haircuts",
        img: "/img/galaryimg7.jpg",
        tags: [
            "Men's Haircut",
            "Kids Haircuts",
            "Long Haircuts",
            "Military Haircut",
            "Buzz Cuts",
            "Fade Cut",
            "Hair Shape-Up"
        ]
    },
    {
        title: "Beard Services",
        img: "/img/haircut.png",
        tags: [
            "Beard Trim",
            "Beard Maintenance",
            "Beard Dyeing",
            "Beard Conditioning"
        ]
    },
    {
        title: "Hair Coloring",
        img: "/img/galaryimg6.jpg",
        tags: [
            "Full Color",
            "Highlights",
            "Balayage",
            "Color Touch-Up",
            "Ombre Color"
        ]
    },
    {
        title: "Shaving Services",
        img: "/img/galaryimg1.jpg",
        tags: [
            "Classic Shave",
            "Straight Razor Shave",
            "Head Shave"
        ]
    },
    {
        title: "Specialty Cuts & Styling",
        img: "/img/galaryimg8.jpg",
        tags: [
            "Curly Hair Styling",
            "Razor Cut",
            "Edge Up",
            "Men's Hair Lines"
        ]
    },
    {
        title: "Kids & Family Services",
        img: "/img/galaryimg9.jpg",
        tags: [
            "Kids Haircuts",
            "Father-Son Haircuts",
            "Family Grooming Packages"
        ]
    }
];

function Payment() {
    const theme = useTheme();

const handlepayment = async () => {
  console.log("this is payment");

  const body = {
    products: [
      {
        address: "North Indian, Biryani, Mughlai",
        dish: "punjabi",
        id: 1,
        price: 350,
        qnty: 1,
      },
    ],
  };

  try {
    const response = await fetch(
      "http://localhost:4000/payment/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    // ✅ NEW STRIPE WAY — redirect using URL
    if (session.url) {
      window.location.href = session.url;
    } else {
      console.error("Stripe session URL not found", session);
    }
  } catch (error) {
    console.error("Payment error:", error);
  }
};

    
    return (
        <Box sx={{ 
            py: 8,
            px: 2,
            backgroundColor: theme.palette.background.default
        }}>
            <Button onClick={()=> handlepayment()}>Payment</Button>
        </Box>
    );
}

export default Payment;