import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper, Container, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import Navbar from "../header/Navbar"; // Adjust the import path if needed
import Footer from "../Footer/Footer"; // Adjust the import path if needed

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Luxury Sofa",
      price: 999, // Use numeric price for calculations
      quantity: 1,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Elegant Armchair",
      price: 599,
      quantity: 1,
      image: "https://plus.unsplash.com/premium_photo-1683121203379-ba4d4f27b933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Modern Dining Table",
      price: 1299,
      quantity: 1,
      image: "https://plus.unsplash.com/premium_photo-1683133725187-8d0a39626569?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  // Update quantity of an item
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Remove item from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total cost
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#f5f5f5", color: "#352b66", minHeight: "100vh" }}>
        <Container maxWidth="xl" sx={{ padding: "20px" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}
          >
            Your Cart
          </Typography>

          {cart.length === 0 ? (
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Your cart is empty
            </Typography>
          ) : (
            <>
              <Grid container spacing={3}>
                {cart.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <Paper
                      sx={{
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                      <Typography variant="h6" sx={{ marginTop: "10px" }}>
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ marginTop: "5px", color: "#352b66" }}
                      >
                        ${item.price}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                        <IconButton
                          color="primary"
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity === 1}
                        >
                          <Remove />
                        </IconButton>
                        <Typography
                          variant="body1"
                          sx={{ marginX: "10px", fontWeight: "bold" }}
                        >
                          {item.quantity}
                        </Typography>
                        <IconButton
                          color="primary"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Add />
                        </IconButton>
                      </Box>
                      <Button
                        variant="outlined"
                        sx={{
                          marginTop: "10px",
                        //   borderColor: "#352b66",
                          backgroundColor: "#352b66",
                          color: "#fff",
                          "&:hover": { backgroundColor: "#f84f2d", color: "primary",  },
                        }}
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Box
                sx={{
                  marginTop: "100px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Total Cost: ${totalCost.toFixed(2)}
                </Typography>
                <Box sx={{ display: "flex", gap: "20px" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={clearCart} // Clear entire cart
                  >
                    Clear Cart
                  </Button>
                  <Button variant="contained" color="primary">
                    Checkout
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default CartPage;
