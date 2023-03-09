//lida com requisições e devolve a resposta (trata os dados)
const { Endereco, Usuario } = require('../models');
//endereço deve per associado a um usuário

module.exports = {
    async index(req, res) {
        const ADDRESSES = await Endereco.findAll({
            include: {
                association: 'Users'
            }
        });

        return res.json(ADDRESSES);
    },
    async show(req, res) {
        const { idUsuario } = req.params;

        const USER = await Usuario.findByPk(idUsuario, {
            include: {
                association: 'Addresses' //pega o alias da model e associa
            } //inclui associação dentro dos valores do user
        }); //pode recebe um options

        return res.json(USER);
    },
    async edit(req, res) {
        const { idUsuario, id } = req.params;
        const { nome, logradouro, bairro, cidade, numero, cep, estado } = req.body;
        const USER = await Usuario.findByPk(idUsuario);
        const ADDRESS_EXISTS = await Endereco.findByPk(id);

        if(!USER) {
          return res.status(400).json({Error: 'Usuário não encontrado'});
        }

        if (!ADDRESS_EXISTS) {
            return res.status(400).json({Error: 'Endereço não encontrado'});
        }
        
        const ADDRESS = await Endereco.update({ nome, logradouro, bairro, cidade, numero, cep, estado }, {
            where: { id : id }
        });
        return res.json(ADDRESS);
    },
    async store(req, res) {
        const { idUsuario } = req.params;
        const { nome, logradouro, bairro, cidade, numero, cep, estado } = req.body;
        const USER = await Usuario.findByPk(idUsuario);

        if(!USER) {
          return res.status(400).json({Error: 'Usuário não encontrado'});
        }
     
        const ADDRESS = await Endereco.create({ nome, logradouro, bairro, cidade, numero, cep, estado, idUsuario });
        return res.json(ADDRESS);
    },
    async destroy(req, res) {
        const { idUsuario, id } = req.params;
        const USER = await Usuario.findByPk(idUsuario);
        const ADDRESS_EXISTS = await Endereco.findByPk(id);

        if(!USER) {
          return res.status(400).json({Error: 'Usuário não encontrado'})
        }
        
        if (!ADDRESS_EXISTS) {
            return res.status(400).json({Error: 'Endereço não encontrado'});
        }

        const ADDRESS = await Endereco.destroy({
                where: { id: id }
            }
        );
        return res.json(ADDRESS);
    }
}
//qury builder permite fazer querys + complexas