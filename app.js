const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
dotenv.config();

const app = express();

// db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected 🍕"));


app.use(express.json());
app.use(express.urlencoded({ extended: 'false' }));
app.use(morgan('dev'));
app.use(cors());


module.exports=app;