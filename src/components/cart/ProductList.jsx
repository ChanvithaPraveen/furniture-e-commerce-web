import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

// Sample Product Data
const products = [
  {
    name: "Sofa",
    price: "299",
    image: "https://via.placeholder.com/200",
    description: "A comfortable 3-seater sofa.",
  },
  {
    name: "Coffee Table",
    price: "99",
    image: "https://via.placeholder.com/200",
    description: "Modern wooden coffee table.",
  },
  // Add more products here
];

const ProductList = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.name}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
