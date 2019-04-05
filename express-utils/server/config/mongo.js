const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/btc-madrid', { useNewUrlParser: true });

module.exports = mongoose;
