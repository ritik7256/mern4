const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const itemRoutes = require('./routes/itemRoutes');
const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/items', itemRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });