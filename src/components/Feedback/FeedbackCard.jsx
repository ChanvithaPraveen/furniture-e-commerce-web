import React from "react";
import { Card, CardMedia, CardContent, Typography, Rating } from "@mui/material";

const FeedbackCard = ({ feedback }) => (
  <Card
    sx={{
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Soft shadow for 3D effect
      borderRadius: "10px",
      width: "300px",
      margin: "0 auto",
      overflow: "hidden",
      my: "2rem",
      mt: "-1",
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)", // Initial 3D look
      transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth animation
      "&:hover": {
        boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.3)", // Stronger shadow on hover
        transform: "perspective(1000px) rotateX(-5deg) rotateY(5deg)", // Tilt effect
      },
    }}
  >
    <CardMedia
      component="img"
      height="150"
      image={feedback.image}
      alt={feedback.name}
      sx={{
        transform: "scale(1)", // Default scale
        transition: "transform 0.3s ease", // Smooth zoom
        "&:hover": {
          transform: "scale(1.05)", // Slight zoom effect
        },
      }}
    />
    <CardContent>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", textAlign: "center", color: "#333" }}
      >
        {feedback.name}
      </Typography>
      <Rating value={feedback.rating} readOnly sx={{ display: "-ms-inline-flexbox", mb: 1 }} />
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        {feedback.review}
      </Typography>
    </CardContent>
  </Card>
);

export default FeedbackCard;
