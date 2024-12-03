import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useCart } from "../../Context/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const styles = {
    box: { borderBottom: "1px solid #ddd", pb: 2, mb: 2, display: "flex", justifyContent: "space-between", alignItems: "center" },
    button: { ml: 1 },
  };

  return (
    <Box sx={styles.box}>
      <Box>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price} x {item.quantity}
        </Typography>
      </Box>
      <Box>
        <Button onClick={() => updateQuantity(item.id, item.quantity + 1)} sx={styles.button}>+</Button>
        <Button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} sx={styles.button}>-</Button>
        <Button color="error" onClick={() => removeFromCart(item.id)} sx={styles.button}>
          Remove
        </Button>
      </Box>
    </Box>
  );
};

export default CartItem;
