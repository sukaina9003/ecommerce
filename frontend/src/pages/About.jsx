import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ maxWidth: 600, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
            About Food Station
          </Typography>
          <Typography variant="body1" paragraph>
            Food Station is a platform designed to connect food lovers with their favorite restaurants. Whether you're in the mood for a delicious meal from your local restaurant or looking to try something new, Food Station brings a wide variety of options to your fingertips. Our goal is to make ordering food easier, faster, and more convenient, all while offering great deals and amazing service.
          </Typography>
          <Typography variant="body1" paragraph>
            With a simple user interface, you can explore menus, read reviews, and place orders in just a few clicks. We also work with food delivery partners to ensure that your meal reaches you quickly and fresh.
          </Typography>
          <Typography variant="body1" paragraph>
            Join us today and experience the best food delivery service around!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;
