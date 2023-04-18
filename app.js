var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

const port = process.env.PORT || 3000;



/* router requires: defining the names of the files that we're going to host at the routes. */

// routes for data gets (like db access)
var usersRouter = require('./routes/users');
var opportunitiesRouter = require('./routes/opportunities');
var adminDataRouter = require('./routes/admin-data');
var authRouter = require('./routes/auth');
var locationsRouter = require('./routes/locations');
var newUserRouter = require('./routes/newuser');
var descriptionRouter = require('./routes/descriptions');
var typesRouter = require('./routes/types');
var logoutRouter = require('./routes/logout');
var sessionRouter = require('./routes/session');
// Html pages being hosted
var indexRouter = require('./routes/html/index');
var demoRouter = require('./routes/html/demo');
var advSearchRouter = require('./routes/html/adv-search');
var adminRouter = require('./routes/html/admin');
var formRouter = require('./routes/html/form');
var locationDemoRouter = require('./routes/html/location-parse-demo');
var addLocation = require('./routes/html/location-add-demo');
var loginTest = require('./routes/html/logintest');
const { type } = require('os');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session management
// TODO: change to be randomized at runtime
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

// Defining the app to use different endpoint files at different links.
// uses the 'requires' we defined from line 8-12
// This is essentially saying "When we go to /opportunities, use the file ./routes/opportunities.js"

// html pages
app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/demo', demoRouter);
app.use('/addlocation', addLocation);
app.use('/search', advSearchRouter);
app.use('/login', loginTest);
app.use('/form', formRouter);
app.use('/locationdemo', locationDemoRouter);

// data endpoints
app.use('/users', usersRouter);
app.use('/opportunities', opportunitiesRouter);
app.use('/admin-data', adminDataRouter);
app.use('/locations', locationsRouter);
app.use('/auth', authRouter);
app.use('/newuser', newUserRouter);
app.use('/descriptions', descriptionRouter);
app.use('/session', sessionRouter);
app.use('/types', typesRouter);
app.use('/logout', logoutRouter);

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

/* UNCOMMENT THIS WHEN IT COMES TIME TO DEPLOY */
//app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`)
//})

module.exports = app;
