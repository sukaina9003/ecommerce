import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  Grid,
  TextField,
  InputAdornment
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// Import all restaurant images
import pastaPalace from "../images/pasta-palace.jpg";
import romanos from "../images/romanos.jpg";
import tuscanyGrill from "../images/tuscany-grill.png";
import veneto from "../images/veneto.png";
import dragonWok from "../images/dragon-wok.png";
import pandaExpress from "../images/panda-express.png";
import goldenChopsticks from "../images/golden-chopsticks.png";
import shanghaiNights from "../images/shanghai-nights.png";
import tacoFiesta from "../images/taco-fiesta.png";
import burritoBandito from "../images/burrito-bandito.png";
import elMariachi from "../images/el-mariachi.png";
import cantinaLoca from "../images/cantina-loca.png";
import spiceRoute from "../images/spice-route.png";
import karahiKing from "../images/karahi-king.png";
import biryaniExpress from "../images/biryani-express.png";
import desiDhaba from "../images/desi-dhaba.png";
import pizzaHeaven from "../images/pizza-heaven.png";
import sliceFactory from "../images/slice-factory.png";
import mamaMia from "../images/mama-mia.png";
import nySlice from "../images/ny-slice.png";
import burgerBarn from "../images/burger-barn.png";
import fryStation from "../images/fry-station.png";
import chickenLovers from "../images/chicken-lovers.png";
import hotDogStand from "../images/hot-dog-stand.png";
import globalBites from "../images/global-bites.png";
import fusionKitchen from "../images/fusion-kitchen.png";
import hungrySpot from "../images/hungry-spot.png";
import mysteryCuisine from "../images/mystery-cuisine.png";

const Restaurants = () => {
  const { cuisine } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Restaurant data with imported images
  const restaurants = {
    italian: [
      { id: 1, name: "Pasta Palace", image: pastaPalace, rating: 4.5, deliveryTime: "25-35 min" },
      { id: 2, name: "Romano's", image: romanos, rating: 4.2, deliveryTime: "30-40 min" },
      { id: 3, name: "Tuscany Grill", image: tuscanyGrill, rating: 4.7, deliveryTime: "20-30 min" },
      { id: 4, name: "Veneto", image: veneto, rating: 4.3, deliveryTime: "35-45 min" }
    ],
    chinese: [
      { id: 5, name: "Dragon Wok", image: dragonWok, rating: 4.4, deliveryTime: "20-30 min" },
      { id: 6, name: "Panda Express", image: pandaExpress, rating: 4.1, deliveryTime: "15-25 min" },
      { id: 7, name: "Golden Chopsticks", image: goldenChopsticks, rating: 4.6, deliveryTime: "25-35 min" },
      { id: 8, name: "Shanghai Nights", image: shanghaiNights, rating: 4.8, deliveryTime: "30-40 min" }
    ],
    mexican: [
      { id: 9, name: "Taco Fiesta", image: tacoFiesta, rating: 4.3, deliveryTime: "15-25 min" },
      { id: 10, name: "Burrito Bandito", image: burritoBandito, rating: 4.0, deliveryTime: "20-30 min" },
      { id: 11, name: "El Mariachi", image: elMariachi, rating: 4.5, deliveryTime: "25-35 min" },
      { id: 12, name: "Cantina Loca", image: cantinaLoca, rating: 4.2, deliveryTime: "30-40 min" }
    ],
    pakistani: [
      { id: 13, name: "Spice Route", image: spiceRoute, rating: 4.7, deliveryTime: "20-30 min" },
      { id: 14, name: "Karahi King", image: karahiKing, rating: 4.9, deliveryTime: "25-35 min" },
      { id: 15, name: "Biryani Express", image: biryaniExpress, rating: 4.8, deliveryTime: "15-25 min" },
      { id: 16, name: "Desi Dhaba", image: desiDhaba, rating: 4.6, deliveryTime: "30-40 min" }
    ],
    pizza: [
      { id: 17, name: "Pizza Heaven", image: pizzaHeaven, rating: 4.5, deliveryTime: "20-30 min" },
      { id: 18, name: "Slice Factory", image: sliceFactory, rating: 4.3, deliveryTime: "15-25 min" },
      { id: 19, name: "Mama Mia Pizzeria", image: mamaMia, rating: 4.7, deliveryTime: "25-35 min" },
      { id: 20, name: "New York Slice", image: nySlice, rating: 4.4, deliveryTime: "20-30 min" }
    ],
    fastfood: [
      { id: 21, name: "Burger Barn", image: burgerBarn, rating: 4.2, deliveryTime: "10-20 min" },
      { id: 22, name: "Fry Station", image: fryStation, rating: 4.0, deliveryTime: "15-25 min" },
      { id: 23, name: "Chicken Lovers", image: chickenLovers, rating: 4.5, deliveryTime: "20-30 min" },
      { id: 24, name: "Hot Dog Stand", image: hotDogStand, rating: 3.9, deliveryTime: "10-15 min" }
    ],
    other: [
      { id: 25, name: "Global Bites", image: globalBites, rating: 4.3, deliveryTime: "25-35 min" },
      { id: 26, name: "Fusion Kitchen", image: fusionKitchen, rating: 4.6, deliveryTime: "30-40 min" },
      { id: 27, name: "The Hungry Spot", image: hungrySpot, rating: 4.4, deliveryTime: "20-30 min" },
      { id: 28, name: "Mystery Cuisine", image: mysteryCuisine, rating: 4.1, deliveryTime: "35-45 min" }
    ]
  };

  // Filter restaurants based on search term
  const filteredRestaurants = restaurants[cuisine]?.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    || restaurant.rating.toString().includes(searchTerm)
    || restaurant.deliveryTime.includes(searchTerm)
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        gutterBottom 
        sx={{ 
          mb: 4,
          fontWeight: 700,
          color: "black",
          fontFamily: "'Playfair Display', serif",
          textAlign: "center"
        }}
      >
        {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} Restaurants
      </Typography>

      {/* Search Bar */}
      <Box sx={{ 
        mb: 4,
        mx: 'auto',
        maxWidth: 600,
        px: 2
      }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder={`Search ${cuisine} restaurants by name, rating, or delivery time...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
            sx: {
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: 3,
              "& input": {
                padding: "14px",
              },
              "& fieldset": {
                border: "none"
              }
            }
          }}
        />
      </Box>
      
      <Box sx={{ 
        backgroundColor: "#ffe4ec", 
        borderRadius: 3, 
        p: 4,
        boxShadow: 2,
        minHeight: "60vh"
      }}>
        {filteredRestaurants?.length > 0 ? (
          <Grid container spacing={4} justifyContent="center">
            {filteredRestaurants.map((restaurant) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={restaurant.id}>
                <Card sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={restaurant.image}
                    alt={restaurant.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      {restaurant.name}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        ⭐ {restaurant.rating}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        🚚 {restaurant.deliveryTime}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                      <Button 
                        variant="contained" 
                        sx={{ 
                          backgroundColor: '#d70f64', 
                          '&:hover': { 
                            backgroundColor: '#b50e55',
                            transform: "scale(1.05)"
                          },
                          transition: "all 0.3s",
                          px: 4,
                          py: 1,
                          borderRadius: 2,
                          fontWeight: 600
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/dishes/${restaurant.id}`);
                        }}
                      >
                        View Menu
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '50vh'
          }}>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
              No restaurants found matching "{searchTerm}"
            </Typography>
            <Button 
              variant="outlined" 
              onClick={() => setSearchTerm('')}
              sx={{
                color: '#d70f64',
                borderColor: '#d70f64',
                '&:hover': {
                  borderColor: '#b50e55',
                  backgroundColor: 'rgba(215, 15, 100, 0.04)'
                }
              }}
            >
              Clear Search
            </Button>
          </Box>
        )}
      </Box>
    </Container>
    
  );
};

export default Restaurants;