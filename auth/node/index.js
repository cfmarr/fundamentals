const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//Connect to MongoDB
let mongoUrl =
  process.env.NODE_ENV == 'production'
    ? process.env.DB_CONNECTION
    : process.env.DB_CONNECTION_DEV;

mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Connected to MongoDB');
  }
);

//Middlewares
app.use(express.json());

//Route Middlewares
app.use('/api/user/', authRoute); //adds prefix to route path
app.use('/api/posts/', postRoute); //adds prefix to route path

app.listen(3000, () => console.log('Server up and running'));
