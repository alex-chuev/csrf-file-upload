var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cookieParser());
app.use(csrf({cookie: true}));

app.use('/', require('./routes/index'));
app.use('/upload', require('./routes/upload'));

app.use(function(req, res) {
  var error = new Error('Not Found');
  error.status = 404;

  res.render('error', {
    error: error
  });
});

app.listen(3000);
