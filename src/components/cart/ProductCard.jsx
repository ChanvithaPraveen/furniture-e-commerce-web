import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

// Styled Button for the "Add to Cart" button
const AddToCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#352b66",
  color: "#fff",
  padding: "10px 20px",
  fontSize: "1rem",
  textTransform: "uppercase",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#392a85",
  },
}));

// Product Card Component
const ProductCard = ({ product }) => {
  const { name, price, image, description } = product;

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: "8px", overflow: "hidden" }}>
      <CardMedia
        component="img"
        alt={name}
        height="200"
        image={image}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#352b66" }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", marginBottom: "15px" }}>
          {description}
        </Typography>
        <Typography variant="h6" sx={{ color: "#352b66", marginBottom: "20px" }}>
          ${price}
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
