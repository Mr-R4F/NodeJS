const express = require('express');
const routes = express.Router();

const usuarioController = require('../../controllers/usuarioController');
const enderecoController = require('../../controllers/enderecoController');
const viewController = require('../../controllers/viewController')

routes.get('/', viewController.index); 

routes.use((req, res, next) => { //middleware executado antes da req
    console.log(req.method);
    console.log(req.params);
    console.log(`Data ${new Date()}`);
    console.log('Conexão com a aplicação OK');
    next();
})

// Usuário
routes.get('/usuarios', usuarioController.index);

routes.get('/usuario/:id', usuarioController.show);
routes.post('/usuario', usuarioController.store);
routes.put('/usuario/:id', usuarioController.edit);
routes.delete('/usuario/:id', usuarioController.destroy);

//rotas um endereço para user especifico
//pode-se usar encadeamento de rotas (ou seja criar já um endereço para aquele usuário especifico (informando))
//Endereço
routes.get('/enderecos', enderecoController.index);

routes.get('/usuario/:idUsuario/enderecos', enderecoController.show);
routes.post('/usuario/:idUsuario/endereco', enderecoController.store); //criando um usuário para determinada user
routes.put('/usuario/:idUsuario/endereco/:id', enderecoController.edit);
routes.delete('/usuario/:idUsuario/endereco/:id', enderecoController.destroy);

module.exports = routes;