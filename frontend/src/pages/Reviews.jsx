import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Rating,
  Divider,
  Avatar,
  Container
} from '@mui/material';
import { format } from 'date-fns';
import MenuNavbar from '../components/MenuNavbar';

const Reviews = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !reviewText) return;
    
    const newReview = {
      name,
      rating,
      text: reviewText,
      time: new Date()
    };
    
    setReviews([newReview, ...reviews]);
    setName('');
    setRating(3);
    setReviewText('');
  };

  return (
    <>
      <MenuNavbar />
      <Container maxWidth="md" sx={{ py: 4 }}>
        {/* Review Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            Write a Review
          </Typography>
          
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          
          <Box sx={{ mb: 2 }}>
            <Typography component="legend">Rating</Typography>
            <Rating
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              precision={0.5}
              size="large"
            />
          </Box>
          
          <TextField
            fullWidth
            label="Your Review"
            variant="outlined"
            multiline
            rows={4}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ 
              backgroundColor: '#d70f64',
              '&:hover': { backgroundColor: '#b50e55' }
            }}
          >
            Submit Review
          </Button>
        </Box>

        {/* Reviews List */}
        <Box>
          <Typography variant="h5" gutterBottom>
            Customer Reviews ({reviews.length})
          </Typography>
          
          {reviews.length === 0 ? (
            <Typography variant="body1" color="text.secondary">
              No reviews yet. Be the first to review!
            </Typography>
          ) : (
            reviews.map((review, index) => (
              <Card key={index} sx={{ mb: 3, boxShadow: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ bgcolor: '#d70f64', mr: 2 }}>
                      {review.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {review.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {format(review.time, 'MMMM d, yyyy - h:mm a')}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Rating 
                    value={review.rating} 
                    precision={0.5} 
                    readOnly 
                    sx={{ mb: 1 }}
                  />
                  
                  <Typography variant="body1">
                    {review.text}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      </Container>
    </>
  );
};

export default Reviews;