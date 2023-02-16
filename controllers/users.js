// constante del modelo de datos
const User = require("../model/users");

// Obtener todos los objetos
const getUsers = async (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};



module.exports = {
  getUsers
};
