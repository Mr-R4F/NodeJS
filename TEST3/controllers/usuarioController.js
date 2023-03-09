//lida com requisições e devolve as respostas para a aplicação (trata os dados)
const { Usuario } = require('../models');

module.exports = { //toda manipulação com o bd é assíncrona
    async index(req, res) {
        const USERS = await Usuario.findAll(); //envia pelo corpo da req
        return res.json(USERS);
    },
    async show(req, res) {
        const { id } = req.params;
        const USER = await Usuario.findByPk(id);
        return res.json(USER);
    },
    async edit(req, res) {
        const { id } = req.params;
        const { nome, email, senha, cpf } = req.body;

        const USER = await Usuario.update({ nome, email, senha, cpf }, {
            where: { id: id }    
        });
        return res.json(USER);
    },
    async store(req, res) {
        const { nome, email, senha, cpf } = req.body;
        const USER = await Usuario.create({ nome, email, senha, cpf });
        return res.json(USER);
    },
    async destroy(req, res) {
        const { id } = req.params;

        const USER = await Usuario.destroy({
                where: { id: id }
            }
        );
        return res.json(USER);
    }
}