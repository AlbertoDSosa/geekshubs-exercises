'use strict';

const NodeMailer = require('nodemailer');
const HBS = require('nodemailer-express-handlebars');
const path = require('path');

const Email = {};

Email.transporter = NodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ghnodemailer@gmail.com',
    pass: 'nodemailer'
  },
  tls: {
    rejectUnauthorized: false
  },
  from: 'ghnodemailer@gmail.com',
  headers: {}
});

Email.transporter.use('compile', HBS({
  viewEngine: 'hbs',
  extName: '.hbs',
  viewPath: path.join(__dirname, '..', 'views', 'email-templates')
}));

module.exports = Email;
