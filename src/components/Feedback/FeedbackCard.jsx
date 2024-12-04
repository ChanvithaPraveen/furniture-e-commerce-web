import React from "react";
import { Card, CardMedia, CardContent, Typography, Rating } from "@mui/material";
import { motion } from "framer-motion";

const styles = {
  card: {
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    width: "300px",
    margin: "0 auto",
    overflow: "hidden",
    my: "2rem",
    mt: "-1",
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.3)",
      transform: "perspective(1000px) rotateX(-5deg) rotateY(5deg)",
    },
  },
  media: {
    transform: "scale(1)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  rating: {
    display: "-ms-inline-flexbox",
    mb: 1,
  },
  review: {
    textAlign: "center",
  },
};

const FeedbackCard = ({ feedback }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        height="150"
        image={feedback.image}
        alt={feedback.name}
        sx={styles.media}
      />
      <CardContent>
        <Typography variant="h6" sx={styles.title}>
          {feedback.name}
        </Typography>
        <Rating value={feedback.rating} readOnly sx={styles.rating} />
        <Typography variant="body2" color="text.secondary" sx={styles.review}>
          {feedback.review}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

export default FeedbackCard;
