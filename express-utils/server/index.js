'use strict';

require('./config');
const express = require('express');

const PORT = process.env.PORT || 3000;

const server = express();
const hbs = require('hbs');
const hbsUtils = require('hbs-utils')(hbs)
hbsUtils.registerPartials(`${__dirname}/views/partials`);
hbsUtils.registerWatchedPartials(`${__dirname}/views/partials`);

server.use(express.json());

server.set('view engine', 'hbs');
server.set('views', `${__dirname}/views`);

server.use((err, req, res, next) => {
  if (err) {
    err['SyntaxError'] = undefined;
    res.json(err);
  } else {
    next();
  }
});

server.use('/public', express.static(`${__dirname}/public`));

server.use(require('./routes'));

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
