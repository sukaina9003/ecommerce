import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  Card,
  CardContent
} from "@mui/material";
import logoImage from "../images/Capture-removebg-preview.png";
import coverImage from "../images/cover.png";
import partnerImage from "../images/food-delivery-partner.jpg";

const NavbarWithImage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      flexGrow: 1,
      overflowX: 'hidden'
    }}>
      {/* Navbar with all navigation buttons */}
      <AppBar position="static" sx={{ backgroundColor: "white", color: "purple", boxShadow: "none", py: 1 }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Box 
              component="img" 
              src={logoImage} 
              alt="Logo" 
              sx={{ height: 70, mr: 2, cursor: 'pointer' }}
              onClick={() => navigate('/')}
            />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ flexGrow: 1, fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem" }}
            >
              Food Station
            </Typography>
            <Button 
              color="inherit" 
              sx={{ fontSize: "1rem", mx: 1, fontWeight: "bold" }}
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            
            
            <Button 
              color="inherit" 
              sx={{ fontSize: "1rem", mx: 1, fontWeight: "bold" }}
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button 
              color="inherit" 
              sx={{ fontSize: "1rem", mx: 1, fontWeight: "bold" }}
              onClick={() => navigate('/signup')}
            >
              Signup
            </Button>
            <Button 
              color="inherit" 
              sx={{ fontSize: "1rem", mx: 1, fontWeight: "bold" }}
               onClick={() => navigate('/about')}

            >
              About
            </Button>
            
          </Toolbar>
        </Container>
      </AppBar>

      {/* First Banner Image */}
      <Box
        component="img"
        src={coverImage}
        alt="Food Banner"
        sx={{
          width: "100%",
          height: "auto",
          maxHeight: "60vh",
          display: "block",
          objectFit: "cover",
          mb: 4
        }}
      />

      {/* Partnership Section */}
      <Container maxWidth="xl" sx={{ py: 6, px: { xs: 2, md: 4 } }}>
        <Box sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 'auto', md: '60vh' },
          minHeight: 400,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Background Image */}
          <Box
            component="img"
            src={partnerImage}
            alt="Food delivery partnership"
            sx={{
              width: { xs: '100%', md: '80%' },
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              margin: '0 auto',
              borderRadius: 2,
              boxShadow: 3
            }}
          />
          
          {/* Centered Card */}
          <Card sx={{ 
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            p: { xs: 2, md: 3 },
            borderRadius: 2,
            boxShadow: 3,
            width: { xs: '90%', md: '50%' },
            maxWidth: 600,
            textAlign: 'center'
          }}>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, color: "#d70f64" }}>
                You prepare the food, we handle the rest
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                List your restaurant or shop on Food Station
              </Typography>
              <Typography variant="body1" paragraph>
                Would you like millions of new customers to enjoy your amazing food and groceries? So would we?
              </Typography>
              <Typography variant="body1" paragraph>
                It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry customers.
              </Typography>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  backgroundColor: "#d70f64", 
                  color: "white",
                  fontWeight: "bold",
                  mt: 2,
                  px: 4,
                  "&:hover": { backgroundColor: "#b50e55" }
                }}
                onClick={() => navigate('/login')} // Changed to navigate to menu
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default NavbarWithImage;