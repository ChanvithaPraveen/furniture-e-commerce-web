import React from "react";
import { Box, Grid, Typography, Button, TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import Navbar from "../header/NavBar";
import Footer from "../Footer/Footer";

const slides = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683121203379-ba4d4f27b933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683133725187-8d0a39626569?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const productData = [
  { id: 1, name: "Luxury Sofa", price: "$999", image: slides[0] },
  { id: 2, name: "Elegant Armchair", price: "$599", image: slides[1] },
  { id: 3, name: "Modern Dining Table", price: "$1299", image: slides[2] },
  { id: 4, name: "Stylish Bed", price: "$1499", image: slides[0] },
  { id: 5, name: "Luxury Sofa", price: "$999", image: slides[0] },
  { id: 6, name: "Elegant Armchair", price: "$599", image: slides[1] },
  { id: 7, name: "Modern Dining Table", price: "$1299", image: slides[2] },
  { id: 8, name: "Stylish Bed", price: "$1499", image: slides[0] },
];

const ProductsPage = () => {
  return (
    <>
    <Navbar />
    <Box sx={{ padding: "40px", backgroundColor: "#f5f5f5" }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333" }}>
          Our Products
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <TextField
            variant="outlined"
            placeholder="Search Products"
            size="small"
            sx={{
              width: "300px",
              marginRight: "10px",
            }}
          />
          <IconButton sx={{ backgroundColor: "#352b66", color: "#fff" }}>
            <Search />
          </IconButton>
        </Box>
      </Box>

      {/* Product Grid */}
      <Grid container spacing={4}>
        {productData.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "90%",
                padding: "20px",
                height: "100%", // Ensuring full height
                minHeight: "400px", // Fix the height to make cards uniform
                justifyContent: "space-between", // Spacing out the content
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "250px", // Set a fixed height for images
                  position: "relative", // So that we can position the hover effect
                  overflow: "hidden",
                  borderRadius: "8px",
                  "&:hover img": {
                    transform: "scale(1.1)", // Scaling up the image on hover
                    transition: "transform 0.3s ease", // Smooth scaling transition
                  },
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease", // Ensure transition is smooth
                  }}
                />
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginTop: "15px", // Adjusted to create space between image and title
                  color: "#333",
                  textAlign: "center",
                }}
              >
                {product.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "#352b66", marginTop: "5px" }}>
                {product.price}
              </Typography>
              <Box sx={{ marginTop: "-15px", display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#352b66",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#392a85" },
                    marginRight: "10px",
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#352b66",
                    color: "#352b66",
                    "&:hover": { borderColor: "#392a85", color: "#392a85" },
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Pagination (Optional) */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "100px", paddingBottom: "40px" }}>
        <Button variant="contained" sx={{ marginRight: "10px" }}>
          Previous
        </Button>
        <Button variant="contained">Next</Button>
      </Box>
    </Box>

    <Footer />
    </>
  );
};

export default ProductsPage;
