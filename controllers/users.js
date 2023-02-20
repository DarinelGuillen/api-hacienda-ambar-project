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
const validLogin = async (req, res) => {
  try {
    let username = req.params.userNOMBREDEUSUARIO
    let password = req.params.userPASSWORD
    let datos = []
    const user = await User.findOne({nombreDeUsuario: req.params.userNOMBREDEUSUARIO}).exec()
    if (!user) {
      return res.status(404).send({ message: "Usuario no encontrado" })
    } 
    if (username === user.nombreDeUsuario) {
      console.log("paso if user")
      if(password === user.contrasenia){
        console.log('paso if passw')
        datos.push(user._id, user.admin, user.nombreDeUsuario)
        console.log(username, password, datos)
        return res.status(200).json({ datos })
      } else {
        return res.status(400).send({ message: "Contraseña incorrecta" })
      }
    } else {
      return res.status(400).send({ message: "Nombre de usuario incorrecto" })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).send({ error: "Error en el servidor" })
  }
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
    password: req.body.password,
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
        password: req.body.password,
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
  validLogin,
  createUser,
  updateUser,
  deleteUser
};
