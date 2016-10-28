var router = require('express').Router();

var config = require('../config');

router.get('/', function(req, res, next) {
  res.render('index', {
    csrfToken: req.csrfToken(),
    fileInputName: config.fileInputName
  });
});

module.exports = router;
