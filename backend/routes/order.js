import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// POST /api/orders/checkout
router.post('/checkout', async (req, res) => {
  const { userId, cartItems } = req.body;

  if (!userId || !Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({ message: "Invalid request data" });
  }

  try {
    const newOrder = new Order({
      userId,
      items: cartItems,
      createdAt: new Date()
    });

    await newOrder.save();
    res.status(200).json({ message: "Order placed successfully" });
  } catch (err) {
    console.error("Order save error:", err);
    res.status(500).json({ message: "Failed to place order" });
  }
});
// GET /api/orders/:userId
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    console.error("Order fetch error:", err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// Test route: POST /api/orders/create
router.post('/create', (req, res) => {
  res.send('Order created');
});

export default router;
