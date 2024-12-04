import React, { useState } from "react";
import { Box, Typography, Container, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "../header/NavBar";
import Footer from "../Footer/Footer";

// Styled Button for Contact Form
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#352b66",
  color: "#fff",
  padding: "1rem 3rem",
  fontSize: "1.1rem",
  textTransform: "uppercase",
  borderRadius: "30px",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "#352b66",
    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
  },
}));

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <Box>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url("https://images.unsplash.com/photo-1600424990146-2f59f3b5e93c")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#352b66",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Get In Touch With Us
        </Typography>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ padding: "80px 0", backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "40px",  color: "#352b66" }}>
            We'd Love to Hear From You!
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  sx={{ marginBottom: "20px" }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  sx={{ marginBottom: "20px" }}
                />
                <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                  <InputLabel>Subject</InputLabel>
                  <Select
                    name="subject"
                    value={form.subject}
                    onChange={handleInputChange}
                    label="Subject"
                  >
                    <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                    <MenuItem value="Product Information">Product Information</MenuItem>
                    <MenuItem value="Feedback">Feedback</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                  sx={{ marginBottom: "20px" }}
                />
                <StyledButton type="submit">Submit</StyledButton>
              </form>
            </Grid>

            {/* Contact Information Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ color: "#352b66", fontWeight: "bold", marginBottom: "20px" }}>
                Contact Information
              </Typography>
              <Typography variant="body1" sx={{ color: "#352b66", arginBottom: "10px" }}>
                <strong>Phone:</strong> +1 234 567 890
              </Typography>
              <Typography variant="body1" sx={{ color: "#352b66", marginBottom: "10px" }}>
                <strong>Email:</strong> support@furniturestore.com
              </Typography>
              <Typography variant="body1" sx={{ color: "#352b66", marginBottom: "10px" }}>
                <strong>Address:</strong> 123 Furniture St, Cityville, USA
              </Typography>

              {/* Map Section */}
              <Box sx={{ marginTop: "30px" }}>
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6511146870677!2d-122.4013101!3d37.7739728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1a56c9f1%3A0xd1c087c8838e2ee8!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1671015512220!5m2!1sen!2sus"
                  style={{ border: "0", borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ padding: "60px 0", backgroundColor: "#fff", color: "#352b66", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
          Have Any Questions? Reach Out Now!
        </Typography>
        <StyledButton href="/contact">Contact Us</StyledButton>
      </Box>

      <Footer />
    </Box>
  );
};

export default ContactUs;
