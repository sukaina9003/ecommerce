const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  dishId: mongoose.Schema.Types.ObjectId, // Reference to Dish model
  name: String,
  price: Number,
  quantity: Number,
  userId: mongoose.Schema.Types.ObjectId, // Reference to User model (if using authentication)
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = CartItem;
