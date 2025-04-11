import express from 'express';
import Dish from '../models/Dish.js';

const router = express.Router();

// POST route to add a new dish
router.post('/dishes', async (req, res) => {
  const { name, description, price, category, image } = req.body;

  try {
    if (!name || !price) {
      return res.status(400).json({ message: 'Dish name and price are required.' });
    }

    const newDish = new Dish({
      name,
      description,
      price,
      category,
      image,
    });

    const savedDish = await newDish.save();
    res.status(201).json({ message: 'Dish added successfully', dish: savedDish });
  } catch (err) {
    console.error('Error adding dish:', err);
    res.status(500).json({ message: 'Failed to add dish', error: err });
  }
});

export default router;
