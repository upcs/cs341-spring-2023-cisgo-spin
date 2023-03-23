var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// defining the names of the files that we're going to host at the routes.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var demoRouter = require('./routes/demo');
var opportunitiesRouter = require('./routes/opportunities');
var adminRouter = require('./routes/admin');
var formRouter = require('./routes/form');
var locationDemoRouter = require('./routes/location-parse-demo');
var addLocation = require('./routes/location-add-demo');

var locationsRouter = require('./routes/locations');
var advSearchRouter = require('./routes/adv-search');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Defining the app to use different endpoint files at different links.
// uses the 'requires' we defined from line 8-12
// This is essentially saying "When we go to /opportunities, use the file ./routes/opportunities.js"
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/demo', demoRouter);
app.use('/opportunities', opportunitiesRouter);
app.use('/admin', adminRouter);
app.use('/locations', locationsRouter);
app.use('/search', advSearchRouter);
app.use('/form', formRouter);
app.use('/locationdemo', locationDemoRouter);
app.use('/addlocation', addLocation);

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
