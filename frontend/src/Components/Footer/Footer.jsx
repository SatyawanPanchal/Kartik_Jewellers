import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import footerStyles from "./FooterStyles"; // External styles
import logo from "../../assets/logo.png"; // Import your logo

const Footer = () => {
  return (
    <Box sx={footerStyles.footerContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">

          {/* Logo & Brand Name */}
          <Grid item xs={12} sm={6} md={3} sx={footerStyles.logoContainer}>
            <Box component="img" src={logo} alt="Kartik Jewellers" sx={footerStyles.logo} />
            <Typography variant="h5" sx={footerStyles.brandName}>Kartik Jewellers</Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={footerStyles.sectionTitle}>Quick Links</Typography>
            <Link href="#" sx={footerStyles.link}>Home</Link>
            <Link href="#" sx={footerStyles.link}>Collections</Link>
            <Link href="#" sx={footerStyles.link}>About Us</Link>
            <Link href="#" sx={footerStyles.link}>Contact</Link>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={footerStyles.sectionTitle}>Contact Us</Typography>
            <Typography variant="body2" sx={footerStyles.text}>123 Gold Street, Mumbai, India</Typography>
            <Typography variant="body2" sx={footerStyles.text}>+91 98765 43210</Typography>
            <Typography variant="body2" sx={footerStyles.text}>info@kartikjewellers.com</Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={footerStyles.sectionTitle}>Follow Us</Typography>
            <Box>
              <IconButton sx={footerStyles.iconButton}><Facebook /></IconButton>
              <IconButton sx={footerStyles.iconButton}><Instagram /></IconButton>
              <IconButton sx={footerStyles.iconButton}><Twitter /></IconButton>
              <IconButton sx={footerStyles.iconButton}><YouTube /></IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={footerStyles.copyright}>
          <Typography variant="body2">© {new Date().getFullYear()} Kartik Jewellers. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
