import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
// import ProductList from "../components/products/ProductList";
import Cart from "../components/cart/Cart";
import Home from "../components/Home/Home";
import ProductsPage from "../components/products/ProductsPage";
import AboutUs from "../components/about-us/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
