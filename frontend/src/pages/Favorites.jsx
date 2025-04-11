import React from 'react';
import { useFavourites } from '../context/FavouriteContext';
import { Container, Typography, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuNavbar from '../components/MenuNavbar';

const Favorites = () => {
  const { favourites, toggleFavourite } = useFavourites();

  return (
    <>
      <MenuNavbar />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your Favorite Dishes
        </Typography>
        <Grid container spacing={4}>
          {favourites.length === 0 ? (
            <Typography variant="body1" sx={{ mt: 2 }}>
              You have no favorite dishes yet.
            </Typography>
          ) : (
            favourites.map((dish) => (
              <Grid item xs={12} sm={6} md={4} key={dish.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={dish.image || "/images/default-food.jpg"}
                    alt={dish.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{dish.name}</Typography>
                    <Typography>${dish.price.toFixed(2)}</Typography>
                    <IconButton onClick={() => toggleFavourite(dish)}>
                      <FavoriteIcon color="error" />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Favorites;
