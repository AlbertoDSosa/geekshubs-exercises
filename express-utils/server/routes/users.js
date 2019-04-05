const router = require('express').Router();
const User = require('../models/User');

router.get('/', (req, res)=> {
  res.send('Esta es la ruta de usuarios');
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

module.exports = router;
