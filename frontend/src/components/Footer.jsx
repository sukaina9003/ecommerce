import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton, TextField, Button } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";


const Footer = () => {
  return (
    <Box sx={{ bgcolor:"rgb(50, 47, 48)", color: "#fff", mt: 8, pt: 6, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Food Station
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              Deliciousness delivered. Explore from your favorite restaurants.
            </Typography>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Subscribe to our Newsletter
            </Typography>
            <Box component="form" sx={{ display: "flex", gap: 1, mt: 1 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Your email"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  flex: 1,
                }}
              />
              <Button variant="contained" sx={{ bgcolor: "#d32f2f", "&:hover": { bgcolor: "#b71c1c" } }}>
                Subscribe
              </Button>
            </Box>
          </Grid>

          {/* Links & Social */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">Home</Link>
              <Link href="/menu" color="inherit" underline="hover">Menu</Link>
              <Link href="/about" color="inherit" underline="hover">About</Link>
              <Link href="/contact" color="inherit" underline="hover">Contact</Link>
            </Box>

            {/* Social Media */}
            <Box sx={{ mt: 2 }}>
              <IconButton href="#" sx={{ color: "#fff" }}><Facebook /></IconButton>
              <IconButton href="#" sx={{ color: "#fff" }}><Instagram /></IconButton>
              <IconButton href="#" sx={{ color: "#fff" }}><Twitter /></IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom */}
        <Box mt={5} textAlign="center" sx={{ borderTop: "1px solid #444", pt: 2 }}>
          <Typography variant="body2" sx={{ color: "#aaa" }}>
            © {new Date().getFullYear()} Foodify. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
