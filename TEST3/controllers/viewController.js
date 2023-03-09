const { Endereco } = require("../models");

module.exports = {
  async index(req, res) {
    const ADDRESSES = await Endereco.findAll({
      include: {
        association: "Users",
      },
    });

    return res.render("index", { ADDRESSES: ADDRESSES, USER: ADDRESSES.User });
  },
};
