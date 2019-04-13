'use strict';

const mongoose = require('mongoose');
let url = 'localhost:8080/img';
const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    set: (value) => {
      return `${url}/${value}`;
    }
  }
});



const Image = mongoose.model('image', ImageSchema);

module.exports = Image;
