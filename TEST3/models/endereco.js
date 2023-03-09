'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Usuario, { //col na tabela adress que representa o user
        foreignKey: 'idUsuario', //foregin key que faz o relacionamento entra essas models
        as: 'Users'
      }); //pode-se relacionar 2 vezes
    }
  }

  Endereco.init({ //recebe conexão com o banco caso feita manual
    nome: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    numero: DataTypes.STRING,
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER, //forma de dizer que o endereço pertence a um usuário (que faz referência o usuário que possui este ID)
  }, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'Enderecos'
  });

  return Endereco;
};
//representação de como a aplicação se comunica com o BD