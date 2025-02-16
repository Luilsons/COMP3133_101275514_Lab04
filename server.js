const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Default Route (Fix for "Cannot GET /")
app.get('/', (req, res) => {
    res.send('Welcome to the Lab04 Users API');
});

// User Routes
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
