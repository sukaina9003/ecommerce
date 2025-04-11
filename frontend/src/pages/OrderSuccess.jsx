// pages/OrderSuccess.jsx
import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import MenuNavbar from '../components/MenuNavbar';
import Footer from '../components/Footer';

const OrderSuccess = () => {
  return (
    <>
      <MenuNavbar />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <Card sx={{ maxWidth: 400, width: '100%' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Order Placed Successfully!
            </Typography>
            <Typography variant="body1" paragraph>
              Your order has been successfully placed. Thank you for shopping with us!
            </Typography>
            <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = '/'}>
              Go to Home
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Footer /> {/* Footer added */}
    </>
  );
};

export default OrderSuccess;
