const express = require('express');
require('dotenv').config();
const uploadRoutes = require('./routes/upload');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: ['https://email-signature-teamenoch.onrender.com', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api', uploadRoutes);

// Basic route to test server
app.get('/', (req, res) => {
  res.json({ message: 'Photo Upload API is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// ```

// **What this does:** Sets up Express server, connects your routes, and starts listening on port 3000.

// ---

// ## Now let's test it!

// ### Start your server:
// ```
