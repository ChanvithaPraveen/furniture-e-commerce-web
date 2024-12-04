import React from 'react';
import { Box, Typography, IconButton, TextField, Link, Grid, Divider, Button } from '@mui/material';
import { Facebook, Instagram, Pinterest, YouTube } from '@mui/icons-material';

const styles = {
    footer: {
        backgroundColor: '#352b66', // Light Olive Green (example color)
        padding: '50px 50px',
        color: '#ffffff', // Dark Grey (example color)
        width: '100vw',
        boxSizing: 'border-box',
        overflowX: 'hidden',
    },
    section: {
        textAlign: 'center',
        marginBottom: '20px',
        width: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginBottom: '15px',
        color: '#ffffff', // Blue color
    },
    contactText: {
        fontSize: '1rem',
        marginBottom: '5px',
        color: '#ffffff', // Dark Grey
    },
    socialIcons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        '& .MuiIconButton-root': {
            color: '#ffffff', // Dark Grey
            transition: 'color 0.5s ease, transform 0.5s ease',
            '&:hover': {
                color: '#A2B5D7', // Light Blue color on hover
                transform: 'scale(1.3)',
            },
        },
    },
    quickLinks: {
        textAlign: 'center',
        '& a': {
            color: '#ffffff', // Dark Grey
            textDecoration: 'none',
            margin: '0 15px',
            fontWeight: '500',
            fontSize: '1rem',
            transition: 'color 0.5s ease, transform 0.5s ease, text-decoration 0.5s ease',
            '&:hover': {
                color: '#A2B5D7', // Light Blue color on hover
                transform: 'scale(1.2)',
                textDecoration: 'underline',
            },
        },
    },
    newsletter: {
        text: {
            fontSize: '1rem',
            marginBottom: '10px',
            color: '#ffffff', // Dark Grey
        },
        input: {
            marginTop: '0px',
            backgroundColor: 'white',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '250px',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    border: 'none',
                },
            },
        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px', // Space between the input field and button
        },
        button: {
            backgroundColor: '#A2B5D7', // Blue color for the button
            color: 'white',
            '&:hover': {
                backgroundColor: '#A2B5D7', // Light blue hover effect
            },
        },
    },
    footerBottom: {
        textAlign: 'center',
        marginTop: '30px',
        fontSize: '0.9rem',
        color: '#ffffff', // Dark Grey
        '& img': {
            height: '30px',
            marginLeft: '10px',
            marginRight: '6px'
        },
    },
    divider: {
        backgroundColor: '#ffffff', // Dark Grey
        margin: '30px 0',
    },
};

const links = [
    { label: "Our Story", href: "/about" },
    { label: "Showrooms", href: "/showrooms" },
    { label: "Delivery & Returns", href: "/delivery" },
    { label: "Care Guide", href: "/care-guide" },
    { label: "FAQs", href: "/faq" },
];

const Footer = () => {
    return (
        <Box component="footer" sx={styles.footer}>
            <Grid container spacing={6}>
                {/* Contact Us */}
                <Grid item xs={12} md={3} sx={styles.section}>
                    <Typography sx={styles.title}>Get in Touch</Typography>
                    <Typography sx={styles.contactText}>📞 +1 800 123 4567</Typography>
                    <Typography sx={styles.contactText}>🏢 Downtown, Furniture Ave, USA</Typography>
                    <Typography sx={styles.contactText}>✉️ support@furniturestore.com</Typography>
                </Grid>

                {/* Social Media */}
                <Grid item xs={12} md={3} sx={styles.section}>
                    <Typography sx={styles.title}>Follow Us</Typography>
                    <Box sx={styles.socialIcons}>
                        <IconButton href="#" aria-label="Facebook">
                            <Facebook />
                        </IconButton>
                        <IconButton href="#" aria-label="Instagram">
                            <Instagram />
                        </IconButton>
                        <IconButton href="#" aria-label="Pinterest">
                            <Pinterest />
                        </IconButton>
                        <IconButton href="#" aria-label="YouTube">
                            <YouTube />
                        </IconButton>
                    </Box>
                    <Typography sx={{ marginTop: '10px' }}>Inspire your space with us!</Typography>
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} md={3} sx={styles.section}>
                    <Typography sx={styles.title}>Quick Links</Typography>
                    <Box sx={styles.quickLinks}>
                        {links.map((link, index) => (
                            <Link key={index} href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </Box>
                </Grid>

                {/* Newsletter */}
                <Grid item xs={12} md={3} sx={styles.section}>
                    <Typography sx={styles.title}>Join Our Newsletter</Typography>
                    <Typography sx={styles.newsletter.text}>
                        Get the latest updates, deals, and trends in your inbox!
                    </Typography>
                    <Box sx={styles.newsletter.container}>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Your email address"
                            sx={styles.newsletter.input}
                        />
                        <Button sx={styles.newsletter.button}>Send</Button>
                    </Box>
                </Grid>
            </Grid>

            <Divider sx={styles.divider} />

            {/* Footer Bottom */}
            <Box sx={styles.footerBottom}>
                <Typography>
                    Powered by
                    <img src="src/assets/furniture-logo.png" alt="Furniture Logo" />
                    | Furniture Co. © 2024 All Rights Reserved
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
