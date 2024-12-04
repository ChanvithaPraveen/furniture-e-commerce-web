import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import FeedbackCard from "./FeedbackCard";

const CustomerReviews = () => {
  const carouselRef = useRef(null);

  const feedbacks = [
    {
      image: "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_960_720.png",
      name: "John Doe",
      rating: 5,
      review: "Amazing quality! Loved it.",
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/02/28/15/47/call-8602325_1280.png",
      name: "Jane Smith",
      rating: 4,
      review: "Great service and product!",
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_960_720.png",
      name: "John Doe",
      rating: 5,
      review: "Amazing quality! Loved it.",
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/02/28/15/47/call-8602325_1280.png",
      name: "Jane Smith",
      rating: 4,
      review: "Great service and product!",
    },
  ];

  const extendedFeedbacks = [...feedbacks];

  useEffect(() => {
    const carousel = carouselRef.current;

    let scrollInterval = setInterval(() => {
      if (carousel) {
        carousel.scrollBy({ left: 300, behavior: "smooth" });

        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
    }, 3000); 

    return () => clearInterval(scrollInterval); 
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f9fafb",
        py: 6,
        px: 4,
        textAlign: "center",
        overflow: "hidden", 
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, color: "#0f172a" }}
      >
        What Our Customers Say
      </Typography>

      {/* Carousel Container */}
      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          overflowX: "hidden",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
          {extendedFeedbacks.map((feedback, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FeedbackCard feedback={feedback} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomerReviews;
