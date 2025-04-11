// src/pages/Dishes.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container, Box, Typography, Card, CardMedia, CardContent, Button,
  Grid, IconButton, Rating, TextField, InputAdornment
} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuNavbar from '../components/MenuNavbar';
import { useCart } from '../context/CartContext';
import { useFavourites } from '../context/FavouriteContext';

// Import dish images
import spaghetti from '../images/spaghetti.jpg';
import fettuccine from '../images/fettuccine.jpg';
import lasagna from '../images/lasagna.jpg';
import pizzaMargherita from '../images/pizza-margherita.jpg';
import pizzaPepperoni from '../images/pizza-pepperoni.jpg';
import pizzaVegetarian from '../images/pizza-vegetarian.jpg';
import beefTacos from '../images/beef-tacos.jpg';
import quesadilla from '../images/quesadilla.jpg';
import nachos from '../images/nachos.jpg';
import biryani from '../images/biryani.jpg';
import karahi from '../images/karahi.jpg';
import haleem from '../images/haleem.jpg';
import burger from '../images/burger.jpg';
import fries from '../images/fries.jpg';
import nuggets from '../images/nuggets.jpg';
import dumplings from '../images/dumplings.jpg';
import friedRice from '../images/fried-rice.jpg';
import kungPao from '../images/kung-pao.jpg';
import enchiladas from '../images/enchiladas.jpg';
import burrito from '../images/burrito.jpg';
import churros from '../images/churros.jpg';
import pasta from '../images/pasta.jpg';
import risotto from '../images/risotto.jpg';
import tiramisu from '../images/tiramisu.jpg';
import sweet from '../images/sweet.jpg';
import beef from '../images/beef.jpg';
import spring from '../images/spring.jpg';
import bbq from '../images/bbq.jpg';

const Dishes = () => {
  const { restaurantId } = useParams();
  const [favorites, setFavorites] = useState({});
  const [quantities, setQuantities] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();
  const { toggleFavourite, isFavourite } = useFavourites(); // ✅ moved inside component

  const restaurantDishes = {
    1: [
      { id: 101, name: "Spaghetti Carbonara", price: 12.99, image: spaghetti, rating: 4.5 },
      { id: 102, name: "Fettuccine Alfredo", price: 14.99, image: fettuccine, rating: 4.3 },
      { id: 103, name: "Lasagna", price: 13.99, image: lasagna, rating: 4.7 }
    ],
    2: [
      { id: 201, name: "Margherita Pizza", price: 10.99, image: pizzaMargherita, rating: 4.2 },
      { id: 202, name: "Pepperoni Pizza", price: 12.99, image: pizzaPepperoni, rating: 4.5 },
      { id: 203, name: "Vegetarian Pizza", price: 11.99, image: pizzaVegetarian, rating: 4.0 }
    ],
    3: [
      { id: 301, name: "Penne Arrabiata", price: 11.99, image: pasta, rating: 4.4 },
      { id: 302, name: "Mushroom Risotto", price: 13.99, image: risotto, rating: 4.6 },
      { id: 303, name: "Tiramisu", price: 7.99, image: tiramisu, rating: 4.8 }
    ],
    4: [
      { id: 401, name: "Pork Dumplings", price: 6.99, image: dumplings, rating: 4.5 },
      { id: 402, name: "Chicken Fried Rice", price: 9.99, image: friedRice, rating: 4.3 },
      { id: 403, name: "Kung Pao Chicken", price: 11.99, image: kungPao, rating: 4.7 }
    ],
    5: [
      { id: 501, name: "Sweet & Sour Pork", price: 10.99, image: sweet, rating: 4.2 },
      { id: 502, name: "Beef with Broccoli", price: 12.99, image: beef, rating: 4.4 },
      { id: 503, name: "Spring Rolls", price: 4.99, image: spring, rating: 4.1 }
    ],
    6: [
      { id: 601, name: "Beef Tacos", price: 8.99, image: beefTacos, rating: 4.6 },
      { id: 602, name: "Chicken Quesadilla", price: 9.99, image: quesadilla, rating: 4.4 },
      { id: 603, name: "Nachos Supreme", price: 10.99, image: nachos, rating: 4.3 }
    ],
    7: [
      { id: 701, name: "Beef Enchiladas", price: 11.99, image: enchiladas, rating: 4.5 },
      { id: 702, name: "Chicken Burrito", price: 10.99, image: burrito, rating: 4.3 },
      { id: 703, name: "Churros", price: 5.99, image: churros, rating: 4.7 }
    ],
    8: [
      { id: 801, name: "Chicken Biryani", price: 11.99, image: biryani, rating: 4.8 },
      { id: 802, name: "Chicken Karahi", price: 12.99, image: karahi, rating: 4.7 },
      { id: 803, name: "Haleem", price: 9.99, image: haleem, rating: 4.5 }
    ],
    9: [
      { id: 901, name: "Cheeseburger", price: 7.99, image: burger, rating: 4.2 },
      { id: 902, name: "French Fries", price: 3.99, image: fries, rating: 4.0 },
      { id: 903, name: "Chicken Nuggets", price: 5.99, image: nuggets, rating: 4.1 }
    ],
    10: [
      { id: 1001, name: "Pepperoni Pizza", price: 12.99, image: pizzaPepperoni, rating: 4.5 },
      { id: 1002, name: "BBQ Chicken Pizza", price: 14.99, image: bbq, rating: 4.3 },
      { id: 1003, name: "Veggie Supreme", price: 13.99, image: pizzaVegetarian, rating: 4.2 }
    ],
    11: [
      { id: 1101, name: "Sushi Platter", price: 15.99, image: null, rating: 4.6 },
      { id: 1102, name: "Greek Salad", price: 9.99, image: null, rating: 4.4 },
      { id: 1103, name: "Falafel Wrap", price: 8.99, image: null, rating: 4.3 }
    ]
  };

  const dishes = restaurantDishes[restaurantId] || [];

  const filteredDishes = dishes.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuantityChange = (dishId, value) => {
    const quantity = parseInt(value) || 0;
    setQuantities(prev => ({ ...prev, [dishId]: quantity }));
  };

  const calculatePrice = (dishId) => {
    const dish = dishes.find(d => d.id === dishId);
    const quantity = quantities[dishId] || 0;
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <>
      <MenuNavbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
          Menu Items
        </Typography>

        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: 2,
                "& input": {
                  padding: "14px",
                },
              }
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
              <Grid item xs={12} sm={6} md={4} key={dish.id}>
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 6,
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={dish.image || '/images/default-food.jpg'}
                    alt={dish.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography gutterBottom variant="h5">
                        {dish.name}
                      </Typography>
                      <IconButton onClick={() => toggleFavourite(dish)}>
                        {isFavourite(dish.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                      </IconButton>
                    </Box>
                    <Rating value={dish.rating} precision={0.5} readOnly />
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      ${dish.price.toFixed(2)}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <TextField
                        type="number"
                        size="small"
                        value={quantities[dish.id] || 0}
                        onChange={(e) => handleQuantityChange(dish.id, e.target.value)}
                        inputProps={{ min: 0 }}
                        sx={{ width: 80, mr: 2 }}
                      />
                      <Typography variant="body1">
                        Total: ${calculatePrice(dish.id)}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      startIcon={<AddShoppingCartIcon />}
                      fullWidth
                      sx={{
                        mt: 2,
                        backgroundColor: '#d70f64',
                        '&:hover': { backgroundColor: '#b50e55' }
                      }}
                      onClick={() => addToCart({ ...dish, quantity: quantities[dish.id] || 1 })}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h6" align="center" sx={{ py: 4 }}>
                No dishes found matching "{searchTerm}"
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Dishes;
