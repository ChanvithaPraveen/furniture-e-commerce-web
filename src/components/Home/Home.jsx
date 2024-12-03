import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://via.placeholder.com/1200x400?text=Slide+1",
    "https://via.placeholder.com/1200x400?text=Slide+2",
    "https://via.placeholder.com/1200x400?text=Slide+3",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const products = [
    { id: 1, name: "Luxury Sofa", image: "https://via.placeholder.com/300x200", price: "$999" },
    { id: 2, name: "Elegant Armchair", image: "https://via.placeholder.com/300x200", price: "$599" },
    { id: 3, name: "Modern Dining Table", image: "https://via.placeholder.com/300x200", price: "$1299" },
    { id: 4, name: "Stylish Bed", image: "https://via.placeholder.com/300x200", price: "$1499" },
  ];

  return (
    <Box sx={{ height: "100vh", width: "100vw", overflowX: "hidden" }}>
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          zIndex: -1,
        }}
      />

      {/* Navbar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(10px)" }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Furniture Store
          </Typography>
          <Button color="inherit" sx={{ textTransform: "capitalize" }}>
            Home
          </Button>
          <Button color="inherit" sx={{ textTransform: "capitalize" }}>
            Products
          </Button>
          <Button color="inherit" sx={{ textTransform: "capitalize" }}>
            About
          </Button>
          <Button color="inherit" sx={{ textTransform: "capitalize" }}>
            Contact
          </Button>
          <IconButton color="inherit" aria-label="cart">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Hero Section with Image Slider */}
      <Box sx={{ position: "relative", textAlign: "center", color: "#fff", mb: 6 }}>
        <Box
          component="img"
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          sx={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <Typography variant="h4" sx={{ position: "absolute", top: "10%", left: "10%", fontWeight: "bold" }}>
          Discover Comfort and Style
        </Typography>
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "80%",
            left: "10%",
            backgroundColor: "#2563eb",
            color: "#fff",
            padding: "0.8rem 1.5rem",
            fontSize: "1rem",
            "&:hover": { backgroundColor: "#1d4ed8" },
          }}
        >
          Shop Now
        </Button>
      </Box>

      {/* Iconic Images Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <LocalShippingIcon sx={{ fontSize: 64, color: "#2563eb" }} />
            <Typography variant="h6" sx={{ mt: 2, color: "#fff" }}>
              Free Shipping
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              Enjoy free delivery on all orders.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <AttachMoneyIcon sx={{ fontSize: 64, color: "#2563eb" }} />
            <Typography variant="h6" sx={{ mt: 2, color: "#fff" }}>
              Affordable Prices
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              Premium quality at unbeatable prices.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SupportAgentIcon sx={{ fontSize: 64, color: "#2563eb" }} />
            <Typography variant="h6" sx={{ mt: 2, color: "#fff" }}>
              24/7 Support
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              Our team is here to help anytime.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Featured Products Section */}
      <Container sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            mb: 4,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderRadius: "12px",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ccc" }}>
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    sx={{
                      color: "#fff",
                      textTransform: "capitalize",
                      "&:hover": { color: "#2563eb" },
                    }}
                  >
                    View Details
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: "#2563eb",
                      color: "#fff",
                      textTransform: "capitalize",
                      "&:hover": { backgroundColor: "#1d4ed8" },
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Recommended Products Section */}
      <Container>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            mb: 4,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Recommended Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              {/* Reuse product cards */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
