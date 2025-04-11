import React, { useState, useRef } from 'react';
import {
  Container,
  Box,
  TextField,
  Typography,
  IconButton,
  Paper,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import MenuNavbar from '../components/MenuNavbar';

// Import images
import italianImage from '../images/italian.jpg';
import chineseImage from '../images/chinese.jpg';
import mexicanImage from '../images/mexican.jpg';
import pakistaniImage from '../images/pakistani.jpg';
import fastfoodImage from '../images/fastfood.jpg';
import pizzaImage from '../images/pizza.jpg';
import otherImage from '../images/other.png';

const cuisines = [
  { name: 'Italian', image: italianImage },
  { name: 'Chinese', image: chineseImage },
  { name: 'Mexican', image: mexicanImage },
  { name: 'Pakistani', image: pakistaniImage },
  { name: 'Fast Food', image: fastfoodImage },
  { name: 'Pizza', image: pizzaImage },
  { name: 'Other', image: otherImage },
];

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const filteredCuisines = cuisines.filter((cuisine) =>
    cuisine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <MenuNavbar /> {/* Moved inside the return statement */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Search Bar */}
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for restaurants, cuisines, and dishes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: 2,
              "& input": {
                padding: "14px",
              },
            }}
          />
        </Box>

        {/* Heading */}
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{
            mb: 4,
            fontWeight: 700,
            color: "black",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Our Cuisine Selection
        </Typography>

        {/* Carousel */}
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#ffe4ec",
            borderRadius: 3,
            p: 2,
            mb: 4,
          }}
        >
          <IconButton
            onClick={() => scroll('left')}
            sx={{
              position: "absolute",
              top: "50%",
              left: 8,
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "#fff",
              "&:hover": { backgroundColor: "#f8f8f8" },
            }}
          >
            <ArrowBackIos fontSize="small" />
          </IconButton>

          <IconButton
            onClick={() => scroll('right')}
            sx={{
              position: "absolute",
              top: "50%",
              right: 8,
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "#fff",
              "&:hover": { backgroundColor: "#f8f8f8" },
            }}
          >
            <ArrowForwardIos fontSize="small" />
          </IconButton>

          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 3,
              px: 5,
              py: 2,
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {filteredCuisines.map((cuisine) => (
              <Paper
                key={cuisine.name}
                elevation={3}
                sx={{
                  minWidth: 220,
                  height: 220,
                  borderRadius: 2,
                  overflow: "hidden",
                  flexShrink: 0,
                  scrollSnapAlign: "start",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
                onClick={() =>
                  navigate(`/restaurants/${cuisine.name.toLowerCase()}`)
                }
              >
                <Box
                  component="img"
                  src={cuisine.image}
                  alt={cuisine.name}
                  sx={{
                    width: "100%",
                    height: "75%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 1,
                    backgroundColor: "#fafafa",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    align="center"
                  >
                    {cuisine.name}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Menu;