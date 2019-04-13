'use strict';

const router = require('express').Router();
const multer = require('../config/multer');
const Image = require('../models/Image');
const Page = require('../models/Page');

router.post('/upload', multer.single('file'), (req, res) => {
  const image = {
    name: req.file.originalname,
    url: req.file.filename
  }
  new Image(image).save()
    .then((image) => {
      res.send(image);
    })
    .catch((err) => {
      res.status(500).send(err)
    });
});

router.get('/pages', (req, res) => {
  console.log(req.query)
  Page.busquedaWeb(req.query).then(data => {
      res.send(data)
  }).catch(err => {
      res.status(400).send(err)
  })
})



router.use('/users', require('./users'));
router.use('/views', require('./views'));
router.use('/mailer', require('./mailer'));


module.exports = router;
