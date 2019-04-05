const router = require('express').Router();


router.get('/prueba', (req, res)=> {
  let message = {
    to: 'albertodsosa@gmail.com',
    subject: 'Email de prueba hbs',
    template: 'email',
    context: {
        title: 'Email de pruebas',
        text: 'Enviamos una prueba por handlebars'
    },
    attachments:[
        {
            filename: 'text1.txt',
            content: 'Hello World!'
        }
    ]
  }
  
  Email.transporter.sendMail(message,(error,info) => {
    if(error){
        return res.status(500).send(error);
    } else {
        Email.transporter.close();
        res.status(200).send('Respuesta "%s"' + info.response);
    }
  });
});

module.exports = router;
