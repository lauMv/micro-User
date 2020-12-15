const { User } = require("../models/user");

const UserService = {
createUser: async (request, response) => {
    try {
      const user = request.body;
      let resultado = "";
      await User.count({
        where: { name: user.name }
      }).then(async count => {
        if (count != 0) {
          resultado = await User.update(user, {
            where: {
              name: user.name
            }
          });
        } else {
          resultado = await User.create(user);
        }
      });
      return {
        message: "El usuario fue creado exitosamente",
        result: resultado
      };
    } catch (error) {
      throw error;
    }
  },
findUserById: async userId => {
    let user = await User.findByPk(userId, {
    });
    return { response: user };
  },
updateUser: async (request, response) => {
    try {
      const resultado = await User.update(request.body, {
        where: { id: request.params.id }
      });
      let user = await user.findByPk(request.params.id);
      return {
        message: "El usuario fue actualizado exitosamente",
        user: user
      };
    } catch (error) {
      throw error;
    }
  },
deleteUSer: async (request, response) => {
    try {
      const resultado = await User.destroy({
        where: { id: request.params.id }
      });
      return {
        message: "El usuario  fue eliminado exitosamente",
        result: resultado
      };
    } catch (error) {
      throw error;
    }
  },
findUsers: async parameters => {
    let users = await USer.findAll({
      where: parameters
    });
    users = users.map(x => x.dataValues);
    return { response: users };
  }
}
module.exports = UserService;
