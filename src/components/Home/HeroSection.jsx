import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const styles = {
  heroContainer: {
    position: "relative",
    textAlign: "center",
    overflow: "hidden",
    height: "600px",
    width: "100vw",
    "@media (max-width: 600px)": {
      height: "400px", // Reduced height for mobile
    },
  },
  slide: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 1.5s ease-in-out",
  },
  overlay: {
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
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "#fff",
    textAlign: "center",
    px: 2,
    "@media (max-width: 600px)": {
      px: 1, // Reduced padding for mobile
      textAlign: "center",
    },
  },
  logoContainer: {
    mb: 3,
    "& img": {
      width: "150px",
      height: "auto",
      "@media (max-width: 600px)": {
        width: "120px", // Smaller logo on mobile
      },
    },
  },
  heading: {
    fontWeight: "bold",
    mb: 2,
    textTransform: "uppercase",
    letterSpacing: 2,
    "@media (max-width: 600px)": {
      fontSize: "2rem", // Smaller font size for mobile
    },
  },
  subtitle: {
    mb: 4,
    fontSize: "1.2rem",
    letterSpacing: 1,
    "@media (max-width: 600px)": {
      fontSize: "1rem", // Smaller font size for mobile
      mb: 2, // Reduced margin for mobile
    },
  },
  button: {
    backgroundColor: "#352b66",
    color: "#fff",
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    textTransform: "uppercase",
    "&:hover": { backgroundColor: "#392a85" },
    "@media (max-width: 600px)": {
      padding: "0.6rem 1.2rem", // Adjust padding for mobile
      fontSize: "0.9rem", // Adjust font size for mobile
    },
  },
};

const HeroSection = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box sx={styles.heroContainer}>
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <Box
            component="img"
            src={slide}
            alt={`Slide ${index + 1}`}
            sx={{
              ...styles.slide,
              opacity: currentSlide === index ? 1 : 0,
            }}
          />
        </motion.div>
      ))}
      <Box sx={styles.overlay}>
        <Box sx={styles.logoContainer}>
          <img src="hero-logo.png" alt="Company Logo" />
        </Box>
        <Typography variant="h3" sx={styles.heading}>
          Discover Comfort and Style
        </Typography>
        <Typography variant="subtitle1" sx={styles.subtitle}>
          Transform your living space with our exclusive collection.
        </Typography>
        <Button variant="contained" sx={styles.button}>
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
