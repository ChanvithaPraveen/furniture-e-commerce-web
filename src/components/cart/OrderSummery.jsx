import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import OrderItem from "./OrderItem";

// Sample Order Data
const orderItems = [
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
];

const OrderSummary = () => {
  const [items, setItems] = useState(orderItems);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#352b66", marginBottom: "30px" }}>
        Your Order Summary
      </Typography>
      {items.map((item) => (
        <OrderItem key={item.id} item={item} onQuantityChange={handleQuantityChange} />
      ))}
    </Box>
  );
};

export default OrderSummary;
