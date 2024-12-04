import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  Paper,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { motion } from "framer-motion";
import Navbar from "../header/NavBar";
import Footer from "../Footer/Footer";

const slides = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683121203379-ba4d4f27b933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683133725187-8d0a39626569?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const productData = [
  { id: 1, name: "Luxury Sofa", price: "999", image: slides[0] },
  { id: 2, name: "Elegant Armchair", price: "599", image: slides[1] },
  { id: 3, name: "Modern Dining Table", price: "1299", image: slides[2] },
  { id: 4, name: "Stylish Bed", price: "1499", image: slides[0] },
  { id: 5, name: "Luxury Sofa", price: "999", image: slides[0] },
  { id: 6, name: "Elegant Armchair", price: "599", image: slides[1] },
  { id: 7, name: "Modern Dining Table", price: "1299", image: slides[2] },
  { id: 8, name: "Stylish Bed", price: "1499", image: slides[0] },
];

const styles = {
  container: { padding: "40px", marginTop: "40px", backgroundColor: "#f5f5f5" },
  header: { textAlign: "center", marginBottom: "40px" },
  title: { fontWeight: "bold", color: "#333" },
  searchBox: { display: "flex", justifyContent: "center", marginTop: "20px" },
  textField: { width: "300px", marginRight: "10px" },
  searchButton: { backgroundColor: "#352b66", color: "#fff" },
  grid: { spacing: 4 },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "85%",
    padding: "20px",
    margin: "10px",
    height: "100%",
    minHeight: "350px",
    justifyContent: "space-between",
  },
  cardHover: { boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" },
  imageContainer: {
    width: "100%",
    height: "250px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
  },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  titleText: {
    fontWeight: "bold",
    marginTop: "15px",
    color: "#333",
    textAlign: "center",
  },
  priceText: { color: "#352b66", marginTop: "5px" },
  buttonContainer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
  },
  containedButton: {
    backgroundColor: "#352b66",
    color: "#fff",
    marginRight: "10px",
  },
  outlinedButton: { borderColor: "#352b66", color: "#352b66" },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    paddingBottom: "40px",
  },
};

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Box sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h3" sx={styles.title}>
            Our Products
          </Typography>
          <Box sx={styles.searchBox}>
            <TextField
              variant="outlined"
              placeholder="Search Products"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={styles.textField}
            />
            <IconButton sx={styles.searchButton}>
              <Search />
            </IconButton>
          </Box>
        </Box>
        <Grid container sx={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Paper sx={{ ...styles.card, "&:hover": styles.cardHover }}>
                    <Box sx={styles.imageContainer}>
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        style={styles.image}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Box>
                    <Typography variant="h5" sx={styles.titleText}>
                      {product.name}
                    </Typography>
                    <Typography variant="body1" sx={styles.priceText}>
                      ${product.price}
                    </Typography>
                    <Box sx={styles.buttonContainer}>
                      <Button variant="contained" sx={styles.containedButton}>
                        Add to Cart
                      </Button>
                      <Button variant="outlined" sx={styles.outlinedButton}>
                        View Details
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))
          ) : (
            <Typography
              variant="h5"
              sx={{ textAlign: "center", width: "100%" }}
            >
              No products found
            </Typography>
          )}
        </Grid>
        <Box sx={styles.pagination}>
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
