import React from "react";
import Navbar from "../header/Navbar";
import HeroSection from "./HeroSection";
import IconicFeatures from "./IconicFeatures";
import FeaturedProducts from "../products/FeaturedProducts";
import CustomerReviews from "../Feedback/CustomerReviews";
import Footer from "../Footer/Footer";

const Home = () => {
  const slides = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683121203379-ba4d4f27b933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683133725187-8d0a39626569?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const products = [
    { id: 1, name: "Luxury Sofa", image: slides[0], price: "$999" },
    { id: 2, name: "Elegant Armchair", image: slides[1], price: "$599" },
    { id: 3, name: "Modern Dining Table", image: slides[2], price: "$1299" },
    { id: 4, name: "Stylish Bed", image: slides[0], price: "$1499" },
    { id: 5, name: "Luxury Sofa", image: slides[0], price: "$999" },
    { id: 6, name: "Elegant Armchair", image: slides[1], price: "$599" },
    { id: 7, name: "Modern Dining Table", image: slides[2], price: "$1299" },
    { id: 8, name: "Stylish Bed", image: slides[0], price: "$1499" },
  ];

  return (
    <>
      <Navbar />
      <HeroSection slides={slides} />
      <IconicFeatures />
      <FeaturedProducts products={products} />
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default Home;
