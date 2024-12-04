import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { ShoppingCartRounded } from "@mui/icons-material";
import { motion } from "framer-motion";

const styles = {
  container: {
    backgroundColor: "#a9a1d1",
    py: 4,
    padding: 12,
  },
  title: {
    color: "#fff",
    mb: 6,
    mt: -5,
    textAlign: "center",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "#fff",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    transform: "translateZ(0)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      transform: "scale(1.05) translateY(-10px)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
    },
    borderRadius: "10px",
    overflow: "hidden",
  },
  cardMedia: {
    height: 200,
  },
  cardContent: {
    backgroundColor: "#f9fafb",
    color: "#0f172a",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  viewDetailsButton: {
    color: "#352b66",
    textTransform: "capitalize",
    "&:hover": { color: "#392a85" },
  },
  addToCartButton: {
    backgroundColor: "#352b66",
    color: "#fff",
    textTransform: "capitalize",
    "&:hover": { backgroundColor: "#392a85" },
  },
};

const FeaturedProducts = ({ products }) => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        Featured Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={styles.card}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={styles.cardMedia}
                />
                <CardContent sx={styles.cardContent}>
                  <Typography gutterBottom variant="h6">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#4b5563" }}>
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions sx={styles.cardActions}>
                  <Button size="small" sx={styles.viewDetailsButton}>
                    View Details
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<ShoppingCartRounded />}
                    sx={styles.addToCartButton}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
