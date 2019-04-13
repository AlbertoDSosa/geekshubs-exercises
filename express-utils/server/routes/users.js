const router = require('express').Router();
const User = require('../models/User');
const {auth, isAdmin } = require('../middlewares/auhtorization');
const _ = require('lodash');
const bcrypt = require('bcrypt');

router.get('/', auth, (req, res)=> {
  res.send(User.find({}));
});

router.get('/me', auth, (req, res) => {
  res.send(req.user);
});

router.post('/singup', (req, res) => {
  new User(req.body).save()
    .then((user)=> {
      res.send(user);
    })
    .catch(err => {
      err = err.message || err.errmsg;
      res.status(400).send(err);
    });
});

router.post('/singin', async (req, res) => {

  try {
    const { email, password } = req.body;

    if(!email || !password)
      return res.status(400).send('Invalid data.');
      
    const user = await User.findByCredentials(req.body)

    if(!user) {
      return res.status(401).send({
          message: 'Invalid credentials.'
      });
    }

    const token = await user.createAuthToken();
    
    res.header('Authorization', token).send(user);

  } catch(err) {
    res.status(500).send(err)
  }
});

router.patch('/update', auth, async (req, res) => { 
  try {
    req.body = _.pick(req.body, ['username', 'email']);
    await req.user.update(req.body);

    res.send(await User.findById(req.user._id));
  } catch (err) {
      res.status(400).send(err);
  }
});

router.post('/', (req, res) => {
  new User(req.body).save().then(user => {
      res.send(user);
  }).catch(err => {
      res.status(400).send(err);
  });
});

router.delete('/delete', auth, async (req, res) => {
  const user = req.user;
  try {
    await User.deleteOne({ _id: user._id});
  } catch(err){
    res.send(err)
  }
  res.send(req.user)
});

router.patch('/update-pass', auth, async (req, res) => {
  const {oldPassword, newPassword} = req.body;
  const user = req.user;
  
  try {
    const verifiedPassword = await bcrypt.compare(oldPassword, user.password);

    if(!verifiedPassword) {
      throw 'La contraseña no coincide';
    }
  
    let password = await bcrypt.hash(newPassword, 10)

    await user.update({ password });

    res.send(await User.findById(req.user._id));
  } catch(err) {

    res.status(400).send(err);
  }
});

module.exports = router;
