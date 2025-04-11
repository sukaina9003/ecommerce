import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import orderRoutes from './routes/order.js';
import authRoutes from './routes/auth.js';
import dishRoutes from './routes/dish.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/orders', orderRoutes);
app.use('/api/dish', dishRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection failed:', err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
