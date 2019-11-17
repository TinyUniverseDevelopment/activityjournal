const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');

const app = express();

const activitiesRouter = require('./routes/activities');

console.log('connecting to', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('connected to Mongo DB');
  })
  .catch(error => {
    console.log('error connecting to the Db', error.message);
  });

app.use(cors());
app.use(express.json());
// app.use(express.static('build'));

console.log(activitiesRouter);

// Routes
app.use('api/activities/', activitiesRouter);

module.exports = app;
