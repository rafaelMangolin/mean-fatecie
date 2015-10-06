var mongoose = require('mongoose'),
  express = require('express'),
  cors = require('cors'),
  parser = require('body-parser'),
  methodOverride = require('method-override'),
  config = require('./config/config'),
  app = express(),
  port = process.env.PORT || 8000,
  db = mongoose.connection;

mongoose.connect(config.dbUrl)
db
  .once('error', function(err) {
      console.error('Connection Error: ');
  })
.once('open', function() {
  console.log('Connection Opened with MongoDB');
});

app.use(cors());

app.use(parser.json({
  type: 'application/vnd.api+json'
}));
app.use(parser.urlencoded({
  extended: true
}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('App runnning on port: ' + port);

require('./app/user/route')(app);
require('./app/company/route')(app);

module.exports = app;
