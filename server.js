// server.js
import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

config();
const app = express();

// Middleware
app.use(json());
app.use(cors());

// Connect to MongoDB
connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
import itemRoutes from './routes/itemroutes';
import userRoutes from './routes/userroutes';

app.use('/items', itemRoutes);
app.use('/users', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Campus Lost & Found API is running');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});