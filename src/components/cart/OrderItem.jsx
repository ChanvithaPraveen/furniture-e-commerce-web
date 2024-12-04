import React from "react";
import { Box, Typography, Grid, Divider, IconButton, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

// Styled components for the Order Item
const OrderItemBox = styled(Box)(({ theme }) => ({
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  marginBottom: "15px",
}));

const OrderItem = ({ item, onQuantityChange }) => {
  const { name, price, quantity, image } = item;

  const handleIncreaseQuantity = () => {
    onQuantityChange(item.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(item.id, quantity - 1);
    }
  };

  return (
    <OrderItemBox>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#352b66" }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#777", marginBottom: "10px" }}>
            Price: ${price}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconButton onClick={handleDecreaseQuantity} sx={{ color: "#352b66" }}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1" sx={{ margin: "0 10px" }}>
              {quantity}
            </Typography>
            <IconButton onClick={handleIncreaseQuantity} sx={{ color: "#352b66" }}>
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ margin: "10px 0" }} />
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#352b66" }}>
            Total: ${price * quantity}
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" sx={{ borderColor: "#352b66", color: "#352b66" }}>
            Remove
          </Button>
        </Grid>
      </Grid>
    </OrderItemBox>
  );
};

export default OrderItem;
