const Multer = require('multer');

const storage = Multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'server/uploads'); // error, destino
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname); // error, filname
  }
});

module.exports = Multer({storage});
