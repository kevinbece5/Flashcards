//The modules that will be used for the application 
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoStore = require('connect-mongo');
const mongoose = require('mongoose');

const app = express();

//creates the DB
mongoose.connect('mongodb://localhost:27017/flashcards')
const db = mongoose.connection;

//error handler
db.on('error', console.error.bind(console, 'connection error:'));


app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/static', express.static('public'));

//Sets the view engine to PUG
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

//Directs to the routes file that will handle the paths for the application
app.use(mainRoutes);
app.use('/cards', cardRoutes);

//Error middleware for 404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});