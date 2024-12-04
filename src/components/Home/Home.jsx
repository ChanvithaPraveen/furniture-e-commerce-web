// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Button,
//   IconButton,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Container,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
// import { ShoppingCartRounded } from "@mui/icons-material";

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1683121203379-ba4d4f27b933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1683133725187-8d0a39626569?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const products = [
//     { id: 1, name: "Luxury Sofa", image: slides[0], price: "$999" },
//     { id: 2, name: "Elegant Armchair", image: slides[1], price: "$599" },
//     { id: 3, name: "Modern Dining Table", image: slides[2], price: "$1299" },
//     { id: 4, name: "Stylish Bed", image: slides[0], price: "$1499" },
//     { id: 5, name: "Luxury Sofa", image: slides[0], price: "$999" },
//     { id: 6, name: "Elegant Armchair", image: slides[1], price: "$599" },
//     { id: 7, name: "Modern Dining Table", image: slides[2], price: "$1299" },
//     { id: 8, name: "Stylish Bed", image: slides[0], price: "$1499" },
//   ];

//   return (
//     <Box sx={{ height: "100vh", width: "100vw", overflowX: "hidden" }}>
//       {/* Navbar */}
//       <AppBar
//         position="static"
//         sx={{
//           backgroundColor: "#f9fafb",
//           color: "#0f172a",
//           boxShadow: "none",
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Furniture Store
//           </Typography>
//           <Button sx={{ color: "#0f172a", textTransform: "capitalize" }}>
//             Home
//           </Button>
//           <Button sx={{ color: "#0f172a", textTransform: "capitalize" }}>
//             Products
//           </Button>
//           <Button sx={{ color: "#0f172a", textTransform: "capitalize" }}>
//             About
//           </Button>
//           <Button sx={{ color: "#0f172a", textTransform: "capitalize" }}>
//             Contact
//           </Button>
//           <IconButton color="inherit" aria-label="cart">
//             <ShoppingCartIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {/* Hero Section with Smooth Image Slider */}
//       <Box
//         sx={{
//           position: "relative",
//           textAlign: "center",
//           overflow: "hidden",
//           height: "600px", // Adjust height as needed
//           width: "100vw", // Full width
//         }}
//       >
//         {/* Full-Width Image Slider */}
//         {slides.map((slide, index) => (
//           <Box
//             key={index}
//             component="img"
//             src={slide}
//             alt={`Slide ${index + 1}`}
//             sx={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               opacity: currentSlide === index ? 1 : 0,
//               transition: "opacity 1.5s ease-in-out",
//             }}
//           />
//         ))}

//         {/* Header Text Overlay */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 2,
//             backgroundColor: "rgba(0, 0, 0, 0.4)", // Optional dimming effect
//             color: "#fff", // Text color
//             textAlign: "center",
//             px: 2, // Padding for responsiveness
//           }}
//         >
//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: "bold",
//               mb: 2,
//               textTransform: "uppercase",
//               letterSpacing: 2,
//             }}
//           >
//             Discover Comfort and Style
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{
//               mb: 4,
//               fontSize: "1.2rem",
//               letterSpacing: 1,
//             }}
//           >
//             Transform your living space with our exclusive collection.
//           </Typography>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#352b66",
//               color: "#fff",
//               padding: "0.8rem 1.5rem",
//               fontSize: "1rem",
//               textTransform: "uppercase",
//               "&:hover": { backgroundColor: "#392a85" },
//             }}
//           >
//             Shop Now
//           </Button>
//         </Box>
//       </Box>

//       {/* Iconic Features */}
//       <Box sx={{ backgroundColor: "#f9fafb", py: 6 }}>
//         <Container>
//           <Grid container spacing={12} justifyContent="normal">
//             <Grid item xs={12} sm={3}>
//               <LocalShippingIcon sx={{ fontSize: 64, color: "#352b66" }} />
//               <Typography variant="h6" sx={{ mt: 2, color: "#0f172a" }}>
//                 Free Shipping
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#4b5563" }}>
//                 Enjoy free delivery on all orders.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <AttachMoneyIcon sx={{ fontSize: 64, color: "#352b66" }} />
//               <Typography variant="h6" sx={{ mt: 2, color: "#0f172a" }}>
//                 Affordable Prices
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#4b5563" }}>
//                 Premium quality at unbeatable prices.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <SupportAgentIcon sx={{ fontSize: 64, color: "#352b66" }} />
//               <Typography variant="h6" sx={{ mt: 2, color: "#0f172a" }}>
//                 24/7 Support
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#4b5563" }}>
//                 Our team is here to help anytime.
//               </Typography>
//             </Grid>
//             {/* New Icon Added */}
//             <Grid item xs={12} sm={3}>
//               <WorkspacePremiumIcon sx={{ fontSize: 64, color: "#352b66" }} />
//               <Typography variant="h6" sx={{ mt: 2, color: "#0f172a" }}>
//                 Premium Quality
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#4b5563" }}>
//                 Crafted with the finest materials.
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Featured Products Section */}
//       <Box sx={{ backgroundColor: "#a9a1d1", py: 6 }}>
//         <Container>
//           <Typography
//             variant="h4"
//             sx={{
//               color: "#fff",
//               mb: 4,
//               textAlign: "center",
//               fontWeight: "bold",
//             }}
//           >
//             Featured Products
//           </Typography>
//           <Grid container spacing={4}>
//             {products.map((product) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//                 <Card
//                   sx={{
//                     backgroundColor: "rgba(255, 255, 255, 0.15)",
//                     color: "#fff",
//                     transition:
//                       "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//                     transform: "translateZ(0)", // Prevent layout shifts
//                     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle default shadow
//                     "&:hover": {
//                       transform: "scale(1.05) translateY(-10px)", // Pop-up and slight elevation
//                       boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Stronger shadow on hover
//                     },
//                     borderRadius: "10px", // Rounded edges for a softer look
//                     overflow: "hidden", // Clip content inside the card
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={product.image}
//                     alt={product.name}
//                     sx={{
//                       transition: "height 0.3s ease-in-out",
//                       height: "150px",
//                       objectFit: "cover",
//                       "&:hover": {
//                         height: "150px",
//                       },
//                     }}
//                   />
//                   <CardContent
//                     sx={{ backgroundColor: "#f9fafb", color: "#0f172a" }}
//                   >
//                     <Typography gutterBottom variant="h6" component="div">
//                       {product.name}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: "#4b5563" }}>
//                       {product.price}
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button
//                       size="small"
//                       sx={{
//                         color: "#352b66",
//                         textTransform: "capitalize",
//                         "&:hover": { color: "#392a85" },
//                       }}
//                     >
//                       View Details
//                     </Button>
//                     <Button
//                       size="small"
//                       variant="contained"
//                       startIcon={<ShoppingCartRounded />}
//                       sx={{
//                         backgroundColor: "#352b66",
//                         color: "#fff",
//                         textTransform: "capitalize",
//                         "&:hover": { backgroundColor: "#392a85" },
//                       }}
//                     >
//                       Add to Cart
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Home;


import React from "react";
import Navbar from "../header/NavBar";
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
