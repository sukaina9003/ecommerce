import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  Badge,
  IconButton
} from "@mui/material";
import logoImage from "../images/Capture-removebg-preview.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ReceiptIcon from '@mui/icons-material/Receipt'; // Added Order Icon
import { Link } from 'react-router-dom';

const MenuNavbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: "white", 
        color: "rgba(238, 111, 168, 0.1)",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        py: 1,
        px: 2
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side - Logo */}
        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            cursor: "pointer",
            '&:hover': { opacity: 0.8 }
          }}
          onClick={() => navigate('/')}
        >
          <img 
            src={logoImage} 
            alt="Food Station Logo" 
            style={{ height: "50px", marginRight: "10px" }} 
          />
          <Typography 
            variant="h6" 
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "purple"
            }}
          >
            Food Station
          </Typography>
        </Box>

        {/* Right Side - Navigation Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Favorites Button */}
          <Button
            startIcon={<FavoriteBorderIcon />}
            sx={{
              color: "purple",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "0.9rem",
              '&:hover': {
                backgroundColor: "rgba(211, 47, 47, 0.08)"
              }
            }}
            onClick={() => navigate('/favorites')}
          >
            Favorites
          </Button>

          {/* Reviews Button */}
          <Button
            startIcon={<RateReviewOutlinedIcon />}
            sx={{
              color: "purple",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "0.9rem",
              '&:hover': {
                backgroundColor: "rgba(211, 47, 47, 0.08)"
              }
            }}
            onClick={() => navigate('/reviews')}
          >
            Reviews
          </Button>

          {/* Orders Button */}
          <IconButton
            sx={{
              color: "purple",
              marginLeft: "10px",
              '&:hover': {
                backgroundColor: "rgba(211, 47, 47, 0.08)"
              }
            }}
            onClick={() => navigate('/order-history')} // Navigate to Order History page
          >
            <ReceiptIcon />
          </IconButton>

          {/* Cart Button with Badge */}
          <IconButton
            sx={{
              color: "purple",
              marginLeft: "10px",
              '&:hover': {
                backgroundColor: "rgba(211, 47, 47, 0.08)"
              }
            }}
            onClick={() => navigate('/cart')}
          >
            <Badge badgeContent={3} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuNavbar;
