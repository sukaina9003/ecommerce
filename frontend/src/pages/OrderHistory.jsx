import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const userId = "someUserId"; // Replace with real user ID from auth
  const baseURL = 'http://localhost:5000';

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/orders/${userId}`);
        setOrders(response.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Order History
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {orders.length === 0 ? (
          <Typography variant="h6" color="textSecondary" align="center">
            No orders found.
          </Typography>
        ) : (
          orders.map((order, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Order #{index + 1}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    Placed on: {new Date(order.createdAt).toLocaleString()}
                  </Typography>

                  <Typography variant="subtitle2" color="textSecondary" sx={{ fontWeight: 'bold' }}>
                    Order Items:
                  </Typography>

                  {order.items.map((item, i) => (
                    <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                      {item.name} - Quantity: {item.quantity}, Price: ₹{item.price}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => navigate(`/order-details/${order._id}`)}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default OrderHistory;
