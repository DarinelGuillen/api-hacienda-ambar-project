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
// Obtener un objeto por su id 
const getUser = async (req, res) => {
  User.find({nombreDeUsuario: req.params.userNOMBREDEUSUARIO},
    (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
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
// actualizar un elemento a partir del _id
const updateUser = async (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userID },
    {
      $set: {
        admin: req.body.admin,
        nombreDeUsuario: req.body.nombreDeUsuario,
        numTel: req.body.numTel,
        nombreCompleto: req.body.nombreCompleto,
        edad: req.body.edad,
        correo: req.body.correo,
      },
    },
    { new: true },
    (err, User) => {
      if (err) {
        res.send(err);
      } else res.json(User);
    }
  );
};
// borrar un elemento a través del _id
const deleteUser = async (req, res) => {
  User.deleteOne({ _id: req.params.userID })
    .then(() => res.json({ message: "User Deleted" }))
    .catch((err) => res.send(err));
};



module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
