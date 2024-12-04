import React from "react";
import { Paper, Typography, Button } from "@mui/material";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <Paper sx={{ padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <img src={item.image} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <Typography variant="h6" sx={{ marginTop: "10px" }}>
        {item.name}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "5px", color: "#352b66" }}>
        {item.price}
      </Typography>
      <Button
        variant="outlined"
        sx={{
          marginTop: "10px",
          borderColor: "#352b66",
          color: "#352b66",
          "&:hover": { borderColor: "#392a85", color: "#392a85" },
        }}
        onClick={() => removeFromCart(item.id)} // Remove item from cart
      >
        Remove
      </Button>
    </Paper>
  );
};

export default CartItem;
