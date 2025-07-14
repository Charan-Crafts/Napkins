const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve images statically
const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const promptRoutes = require('./routes/prompt');
app.use('/api/prompt', promptRoutes);

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
