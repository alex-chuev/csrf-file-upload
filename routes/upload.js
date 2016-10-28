var router = require('express').Router();
var multer = require('multer');

var config = require('../config');

var uploader = multer({
  fileFilter: fileFilter,
  dest: config.uploadPath
}).single(config.fileInputName);

router.post('/', uploader, function (req, res, next) {
  res.sendStatus(200);
});

function fileFilter(req, file, cb) {
  return cb(null, isFileValid(file));
}

function isFileValid(file) {
  return config.validMimeTypes.indexOf(file.mimetype) !== -1;
}

module.exports = router;
