import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import CartItem from "./CartItem";
import { useCart } from "../../Context/CartContext";

const Cart = () => {
  const { cart, clearCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const styles = {
    container: { mt: 5 },
    total: { mt: 3 },
    button: { mt: 2 },
  };

  return (
    <Container sx={styles.container}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cart.map((item) => (
              <Grid item xs={12} key={item.id}>
                <CartItem item={item} />
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6" sx={styles.total}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
          <Button variant="contained" color="secondary" onClick={clearCart} sx={styles.button}>
            Clear Cart
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
