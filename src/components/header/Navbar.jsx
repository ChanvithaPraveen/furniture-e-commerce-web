import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f9fafb",
        color: "#0f172a",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Furniture Store
        </Typography>
        {["Home", "Products", "AboutUs", "ContactUs"].map((text) => (
          <Button
            key={text}
            sx={{ color: "#0f172a", textTransform: "capitalize" }}
            component={Link} // Use Link component for navigation
            to={`/${text.toLowerCase()}`} // Dynamically generate the route
          >
            {text}
          </Button>
        ))}
        {/* Link to Cart Page */}
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <IconButton color="inherit" aria-label="cart">
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
