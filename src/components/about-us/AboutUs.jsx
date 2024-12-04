import React from "react";
import { Box, Typography, Container, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "../header/NavBar";
import Footer from "../Footer/Footer";

// Styled Box for Section
const Section = styled(Box)({
  backgroundColor: "#f9f9f9",
  padding: "80px 0",
  textAlign: "center",
});

// Styled Button for Call to Action
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#352b66",
  color: "#fff",
  padding: "1rem 3rem",
  fontSize: "1.1rem",
  textTransform: "uppercase",
  borderRadius: "30px",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
  },
}));

const AboutUs = () => {
  return (
    <Box>

        <Navbar />
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url("https://images.unsplash.com/photo-1501594907359-d9b130132e3a")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#352b66",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Welcome to Our Furniture Store
        </Typography>
      </Box>

      {/* About Section */}
      <Section sx={{ backgroundColor: "#f5f5f5", marginBottom: "20px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333333", marginBottom: "10px" }}>
          Who We Are
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "800px", color: "#333333", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.7" }}>
          At our Furniture Store, we believe that furniture should tell a story. Every piece in our collection is
          designed to create comfort, style, and warmth for your living spaces. With a passion for exceptional design and
          quality craftsmanship, we cater to every taste and preference, offering timeless pieces that truly elevate your
          home decor.
        </Typography>
      </Section>

      {/* Mission and Vision Section */}
      <Section>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#352b66", marginBottom: "40px", marginTop: "-20px" }}>
          Our Mission & Vision
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={5}>
            <Card sx={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Mission"
                height="200"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#352b66", marginBottom: "10px" }}>
                  Our Mission
                </Typography>
                <Typography variant="body2" sx={{ color: "#333", fontSize: "1rem", lineHeight: "1.6" }}>
                  To provide our customers with high-quality, innovative furniture that enhances their lives by
                  offering comfort, beauty, and functionality. We aim to deliver excellent customer service and an
                  unforgettable shopping experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Card sx={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <CardMedia
                component="img"
                image="https://plus.unsplash.com/premium_photo-1723579445566-cb2e884ae329?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Vision"
                height="200"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#352b66", marginBottom: "10px" }}>
                  Our Vision
                </Typography>
                <Typography variant="body2" sx={{ color: "#333", fontSize: "1rem", lineHeight: "1.6" }}>
                  We envision becoming a global leader in providing modern, sustainable, and affordable furniture that
                  brings elegance and comfort to every home. Our goal is to make furniture shopping a pleasurable and
                  rewarding experience for everyone.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>

      {/* Call to Action Section */}
      <Box sx={{ padding: "60px 0", backgroundColor: "#fff", color: "#352b66", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
          Ready to Transform Your Home?
        </Typography>
        <StyledButton href="/products" >Shop Now</StyledButton>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutUs;
