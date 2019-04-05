const router = require('express').Router();
 
router.get('/prueba', (req, res) => {
    res.render('prueba.hbs', {
        users: [
            {id: 1, name: 'Alberto'},
            {id: 2, name: 'Juan'},
            {id: 3, name: 'Xavi'},
            {id: 4, name: 'Ivan'}
        ],
        admin: {
            nombre: 'Alberto',
            apellidos: 'D.Sosa'
        },
        title: 'Pagina de pruebas',
        layout: 'template'
    });
});
 
module.exports = router;
