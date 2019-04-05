'use strict';

const router = require('express').Router();
const multer = require('../config/multer');

router.get('/', (req, res)=> {
  res.send('Funciona!!');
});

router.post('/multer/uploads', multer.single('file'), (req, res) => {
  res.send(req.file);
});

router.use('/users', require('./users'));
router.use('/views', require('./views'));
router.use('/mailer', require('./mailer'));


module.exports = router;
