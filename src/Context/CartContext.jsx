import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, { ...product, quantity: 1 }]);
  const updateQuantity = (id, quantity) => setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
