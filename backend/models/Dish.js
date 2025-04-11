// models/Dish.js
import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Dish = mongoose.model('Dish', dishSchema);

export default Dish;
