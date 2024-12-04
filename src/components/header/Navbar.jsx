import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const styles = {
  appBar: {
    backgroundColor: "#f9fafb",
    color: "#0f172a",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 9999,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "#0f172a",
    textTransform: "capitalize",
  },
  cartLink: {
    textDecoration: "none",
  },
};

const Navbar = () => {
  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={styles.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={styles.title}>
          Furniture Store
        </Typography>
        {["Home", "Products", "AboutUs", "ContactUs", "Login", "Register"].map((text) => (
          <Button
            key={text}
            sx={styles.button}
            component={Link}
            to={`/${text.toLowerCase()}`}
          >
            {text}
          </Button>
        ))}
        <Link to="/cart" style={styles.cartLink}>
          <IconButton color="inherit" aria-label="cart">
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
