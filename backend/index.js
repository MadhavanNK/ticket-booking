const express = require('express');
const mongoose = require('mongoose');
const bookingRoutes = require('./routes/bookingRoutes');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/booking', bookingRoutes);

// Connect to MongoDB
const PORT = 5000;
const MONGO_URI = 'mongodb+srv://madhavannk:maddy301@bookingdb.uqeqx.mongodb.net/?retryWrites=true&w=majority&appName=BookingDB';

mongoose.connect(MONGO_URI,)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(error => console.error('MongoDB connection error:', error));
