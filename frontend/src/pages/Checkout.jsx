import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography, Paper, Grid } from '@mui/material';
import { useCart } from '../context/CartContext';
import BillCard from '../components/BillCard';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  // Replace this with real user ID from auth context/token
  const userId = "someUserId";

  // ✅ Local server URL
  const baseURL = 'http://localhost:5000';

  const handleConfirmOrder = async () => {
    try {
      const response = await axios.post(`${baseURL}/api/orders/checkout`, {
        userId,
        cartItems,
      });

      console.log(response.data);
      clearCart();
      alert('Order placed successfully!');
      navigate('/order-success');
    } catch (err) {
      console.error(err);
      alert('Order failed. Please try again.');
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: 'bold', color: 'primary.main' }}
      >
        Checkout
      </Typography>

      <Paper sx={{ p: 3, mb: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <BillCard />
      </Paper>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Button
            onClick={handleConfirmOrder}
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              fontSize: '1.2rem',
              padding: '12px 24px',
              boxShadow: 3,
              '&:hover': {
                boxShadow: 6,
              },
            }}
          >
            Confirm Order
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
