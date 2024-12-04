import React, { useState } from "react";
import { Box, Typography, Button, Divider, Grid } from "@mui/material";
import OrderItem from "../OrderItem/OrderItem"; // Import the OrderItem component

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sofa",
      price: 299,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Coffee Table",
      price: 99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleProceedToCheckout = () => {
    // Logic to handle checkout (navigate to checkout page or show checkout modal)
    alert("Proceeding to Checkout...");
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#352b66", marginBottom: "30px" }}>
        Your Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6" sx={{ color: "#777", textAlign: "center" }}>
          Your cart is empty.
        </Typography>
      ) : (
        cartItems.map((item) => (
          <OrderItem key={item.id} item={item} onQuantityChange={handleQuantityChange} />
        ))
      )}
      <Divider sx={{ margin: "20px 0" }} />
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#352b66" }}>
            Total: ${getTotalPrice()}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#352b66",
              color: "#fff",
              padding: "12px 24px",
              fontSize: "1.1rem",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "#392a85",
              },
            }}
            onClick={handleProceedToCheckout}
          >
            Proceed to Checkout
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
