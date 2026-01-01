const express = require('express');
require('dotenv').config();
const uploadRoutes = require('./routes/upload');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api', uploadRoutes);

// Basic route to test server
app.get('/', (req, res) => {
  res.json({ message: 'Photo Upload API is running!' });
});

// Start server

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

