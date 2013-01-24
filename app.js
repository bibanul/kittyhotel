
/**
 * Module dependencies.
 */
var application_root = __dirname
    , express = require('express')
    , mongoose = require('mongoose');

var app = module.exports = express.createServer();

// Configuration
require('./routes/condo')(app);

app.configure(function(){
  app.set('views', application_root + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  //app.use(express.session({ secret: 'smallfuzzy9kittenspurr10timesmore'}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(application_root + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Connect to db, localhost if no ENV vars set
var dbString = 
  process.env.MONGODB_URI || 
  process.env.MONGOLAB_URI || 
  'mongodb://kittyhoteluser:purr@ds049337.mongolab.com:49337/heroku_app11187378';

// Ensure safe writes
var mongoOptions = { db: { safe: true }};

// Connect
mongoose.connect(dbString, mongoOptions, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + dbString + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + dbString);
  }
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

