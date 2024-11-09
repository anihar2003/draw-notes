import mongoose from 'mongoose';
require('dotenv').config();



const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

