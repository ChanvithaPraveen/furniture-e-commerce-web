import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
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
  drawer: {
    width: 250,
    paddingTop: "2rem",
  },
  drawerList: {
    padding: 0,
  },
  drawerItem: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
};

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={styles.menuButton} onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={styles.title}>
          Furniture Store
        </Typography>

        {/* Drawer for mobile */}
        <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
          <List sx={styles.drawer} onClick={() => toggleDrawer(false)}>
            {["Home", "Products", "AboutUs", "ContactUs", "Login", "Register"].map((text) => (
              <ListItem button key={text} sx={styles.drawerItem} component={Link} to={`/${text.toLowerCase()}`}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Desktop Menu Buttons */}
        {!isMobile && (
          <div>
            {["Home", "Products", "AboutUs", "ContactUs", "Login", "Register"].map((text) => (
              <Button key={text} sx={styles.button} component={Link} to={`/${text.toLowerCase()}`}>
                {text}
              </Button>
            ))}
          </div>
        )}

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
