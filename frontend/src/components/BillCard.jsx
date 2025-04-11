// src/components/BillCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import { useCart } from '../context/CartContext';

const BillCard = () => {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Card sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <CardContent>
        <Typography variant="h5" fontWeight={600}>Bill Summary</Typography>
        <Divider sx={{ my: 2 }} />
        {cartItems.length === 0 ? (
          <Typography>No items in cart.</Typography>
        ) : (
          cartItems.map((item, idx) => (
            <Box key={idx} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>{item.name} x {item.quantity}</Typography>
              <Typography>₹{item.price * item.quantity}</Typography>
            </Box>
          ))
        )}
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" textAlign="right">
          Total: ₹{totalAmount}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BillCard;
