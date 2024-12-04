import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import Navbar from "../header/Navbar";
import Footer from "../Footer/Footer";

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

const styles = {
  heroBox: {
    backgroundImage: `url("https://images.unsplash.com/photo-1600424990146-2f59f3b5e93c")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#352b66",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  contactFormBox: {
    padding: "80px 0",
    backgroundColor: "#f9f9f9",
  },
  formTitle: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "40px",
    color: "#352b66",
  },
  contactInfoTitle: {
    color: "#352b66",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  contactInfoText: {
    color: "#352b66",
    marginBottom: "10px",
  },
  mapIframe: {
    border: "0",
    borderRadius: "8px",
  },
  callToActionBox: {
    padding: "60px 0",
    backgroundColor: "#fff",
    color: "#352b66",
    textAlign: "center",
  },
};

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message || !form.subject) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    setTimeout(() => {
      setLoading(false);
      setSuccess("Thank you for reaching out! We'll get back to you soon.");
      setForm({
        name: "",
        email: "",
        message: "",
        subject: "",
      });
    }, 2000);
  };

  return (
    <Box>
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={styles.heroBox}>
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Get In Touch With Us
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={styles.contactFormBox}>
          <Container maxWidth="lg">
            <Typography variant="h3" sx={styles.formTitle}>
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
                  {error && <Alert severity="error" sx={{ marginBottom: "20px" }}>{error}</Alert>}
                  {success && <Alert severity="success" sx={{ marginBottom: "20px" }}>{success}</Alert>}
                  <StyledButton type="submit" disabled={loading}>
                    {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Submit"}
                  </StyledButton>
                </form>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h5" sx={styles.contactInfoTitle}>
                  Contact Information
                </Typography>
                <Typography variant="body1" sx={styles.contactInfoText}>
                  <strong>Phone:</strong> +1 234 567 890
                </Typography>
                <Typography variant="body1" sx={styles.contactInfoText}>
                  <strong>Email:</strong> support@furniturestore.com
                </Typography>
                <Typography variant="body1" sx={styles.contactInfoText}>
                  <strong>Address:</strong> 123 Furniture St, Cityville, USA
                </Typography>

                <Box sx={{ marginTop: "30px" }}>
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6511146870677!2d-122.4013101!3d37.7739728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1a56c9f1%3A0xd1c087c8838e2ee8!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1671015512220!5m2!1sen!2sus"
                    style={styles.mapIframe}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={styles.callToActionBox}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
            Have Any Questions? Reach Out Now!
          </Typography>
          <StyledButton href="/contact">Contact Us</StyledButton>
        </Box>
      </motion.div>

      <Footer />
    </Box>
  );
};

export default ContactUs;
