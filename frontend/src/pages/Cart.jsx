import React from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
  IconButton,
  TextField
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import MenuNavbar from '../components/MenuNavbar';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalAmount = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, Math.max(1, newQuantity));
  };

  return (
    <>
      <MenuNavbar />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          🛒 Your Shopping Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Box textAlign="center" py={6}>
            <Typography variant="h5" mb={2}>Your cart is empty</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#d70f64',
                '&:hover': { backgroundColor: '#b50e55' },
              }}
              onClick={() => navigate('/menu')}
            >
              Browse Menu
            </Button>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {/* Cart Items */}
            <Grid item xs={12} md={8}>
              {cartItems.map((item) => (
                <Card key={item.id} sx={{ mb: 3, boxShadow: 3 }}>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} sm={3}>
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.name}
                          sx={{
                            width: '100%',
                            height: 100,
                            objectFit: 'cover',
                            borderRadius: 2,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="h6" fontWeight={600}>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ${item.price.toFixed(2)} each
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Box display="flex" alignItems="center">
                          <TextField
                            type="number"
                            size="small"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item.id, parseInt(e.target.value))
                            }
                            inputProps={{ min: 1 }}
                            sx={{ width: 60, mr: 1 }}
                          />
                          <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </Grid>

            {/* Order Summary */}
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 4, boxShadow: 4, borderRadius: 3 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  🧾 Order Summary
                </Typography>
                <Divider sx={{ my: 2 }} />

                {cartItems.map((item) => (
                  <Box
                    key={item.id}
                    display="flex"
                    justifyContent="space-between"
                    mb={1}
                  >
                    <Typography fontSize="0.95rem">
                      {item.name} (x{item.quantity})
                    </Typography>
                    <Typography fontWeight={500}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Box>
                ))}

                <Divider sx={{ my: 2 }} />
                <Box display="flex" justifyContent="space-between" mb={3}>
                  <Typography variant="h6" fontWeight={700}>
                    Total
                  </Typography>
                  <Typography variant="h6" fontWeight={700}>
                    ${totalAmount}
                  </Typography>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    backgroundColor: '#d70f64',
                    fontWeight: 600,
                    fontSize: '1rem',
                    '&:hover': { backgroundColor: '#b50e55' },
                  }}
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout
                </Button>
              </Card>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Cart;
