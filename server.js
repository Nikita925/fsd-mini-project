const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Import user routes

// Load environment variables from .env file
dotenv.config({ path: '/home/anshumanjoshi/Documents/Project/mini-proj/.env' });

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS to allow frontend to communicate with backend

const joinCoachingRoutes = require('./routes/joincoachingRoute');
app.use('/api/applications', joinCoachingRoutes);


// Debugging: Log the MongoDB URI to ensure it's being loaded correctly
console.log('MONGO_URI:', process.env.MONGO_URI);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  // Removed deprecated options
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit the app if MongoDB connection fails
  });


// Base route for testing if the server is up
app.get('/', (req, res) => {
  res.send('Wow Sports and Fitness API is running...');
});

// Use the user routes for any requests starting with /api/users
app.use('/api/users', userRoutes);

// Global 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler for other errors
app.use((err, req, res, next) => { // Added next parameter
  console.error('An error occurred:', err.message);
  res.status(500).json({ error: 'An internal error occurred' });
});

// Set up the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});