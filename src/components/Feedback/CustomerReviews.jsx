import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
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
  ];

  // Duplicate the feedbacks array for infinite scrolling
  const extendedFeedbacks = [...feedbacks, ...feedbacks];

  useEffect(() => {
    const carousel = carouselRef.current;

    let scrollInterval = setInterval(() => {
      if (carousel) {
        carousel.scrollBy({ left: 300, behavior: "smooth" });

        // Reset position when reaching the end
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
    }, 2000); // Adjust speed here (2 seconds)

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f9fafb",
        py: 6,
        px: 4,
        textAlign: "center",
        overflow: "hidden", // Prevent manual scrolling
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, color: "#0f172a" }}
      >
        What Our Customers Say
      </Typography>
      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          overflowX: "hidden", // Prevent horizontal scrollbar
          justifyContent: "center",
        }}
      >
        {extendedFeedbacks.map((feedback, index) => (
          <Box
            key={index}
            sx={{
              flexShrink: 0,
              width: "300px", // Adjust card size
              mx: 2, // Space between cards
            }}
          >
            <FeedbackCard feedback={feedback} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CustomerReviews;
