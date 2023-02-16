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
// Crear un objeto con el formato indicado
const createUser = async (req, res) => {
  const user = new User({
    admin: req.body.admin,
    nombreDeUsuario: req.body.nombreDeUsuario,
    nombreCompleto: req.body.nombreCompleto,
    numTel: req.body.numTel,
    edad: req.body.edad,
    correo: req.body.correo,
  });

  user.save( async (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};



module.exports = {
  getUsers,
  createUser
};
