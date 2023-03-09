const EXPRESS = require('express');
const APP = EXPRESS();//inicializá-lo

APP.get('/home', (req, res) => { //para rotas
    res.status(200).send('<h1>HELLO WORLD</h1>');
})

APP.get('/users', (req, res) => { //para rotas
    const USERS = [
        {
            nome: 'teste',
            email: 'teste@teste.com'
        },
        {
            nome: 'testa',
            email: 'testa@testa.com'
        }
    ];
    res.status(200).json(USERS);
})

APP.listen(8080);