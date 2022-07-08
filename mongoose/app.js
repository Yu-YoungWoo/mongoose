var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const commentRouter = require('./routes/comments');

var app = express();

var mongoose = require("mongoose");
require("dotenv").config();

const mongooseURL = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@localhost:${process.env.MONGO_PORT}/admin`;
const options = { 
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(
    mongooseURL,
    options
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
