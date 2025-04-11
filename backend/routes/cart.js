import express from 'express';
import CartItem from '../models/CartItem.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const items = await CartItem.find(); // You can add filter by userId
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = new CartItem(req.body);
  await item.save();
  res.status(201).json(item);
});

router.delete('/:id', async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
