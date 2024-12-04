import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
        height: "600px",
        width: "100vw",
      }}
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          component="img"
          src={slide}
          alt={`Slide ${index + 1}`}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
        />
      ))}
      <Box
  sx={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay
    color: "#fff",
    textAlign: "center",
    px: 2,
  }}
>
  {/* Company Logo */}
  <Box
    sx={{
      mb: 3, // Adjust the margin to space the logo from the heading
      '& img': {
        width: '150px', // Adjust the logo size as needed
        height: 'auto',
      },
    }}
  >
    <img src="src/assets/hero-logo.png" alt="Company Logo" />
  </Box>

  {/* Main Heading */}
  <Typography
    variant="h3"
    sx={{
      fontWeight: "bold",
      mb: 2,
      textTransform: "uppercase",
      letterSpacing: 2,
    }}
  >
    Discover Comfort and Style
  </Typography>

  {/* Subtitle */}
  <Typography
    variant="subtitle1"
    sx={{
      mb: 4,
      fontSize: "1.2rem",
      letterSpacing: 1,
    }}
  >
    Transform your living space with our exclusive collection.
  </Typography>

  {/* Shop Now Button */}
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#352b66",
      color: "#fff",
      padding: "0.8rem 1.5rem",
      fontSize: "1rem",
      textTransform: "uppercase",
      "&:hover": { backgroundColor: "#392a85" },
    }}
  >
    Shop Now
  </Button>
</Box>

    </Box>
  );
};

export default HeroSection;
