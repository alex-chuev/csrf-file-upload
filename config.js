var path = require('path');

module.exports = {
  fileInputName: 'record',
  uploadPath: path.join(__dirname, 'uploads'),
  validMimeTypes: [
    'audio/mpeg',
    'audio/mp3'
  ]
};
