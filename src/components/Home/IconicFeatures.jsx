import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { motion } from "framer-motion";

const IconicFeatures = () => {
  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 64, color: "#352b66" }} />,
      title: "Free Shipping",
      description: "Enjoy free delivery on all orders.",
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 64, color: "#352b66" }} />,
      title: "Affordable Prices",
      description: "Premium quality at unbeatable prices.",
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 64, color: "#352b66" }} />,
      title: "24/7 Support",
      description: "Our team is here to help anytime.",
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: 64, color: "#352b66" }} />,
      title: "Premium Quality",
      description: "Crafted with the finest materials.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f9fafb", py: 6 }}>
      <Container>
        <Grid container spacing={12} justifyContent="normal">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }} 
              >
                {feature.icon}
                <Typography variant="h6" sx={{ mt: 2, color: "#0f172a" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#4b5563" }}>
                  {feature.description}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default IconicFeatures;
