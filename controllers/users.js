// constante del modelo de datos
const User = require("../model/users");
const jwt = require("jsonwebtoken");
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIASYIB6FD553J3AZFQ',
  secretAccessKey: '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',
  region: 'us-east-2'
});

const sns = new AWS.SNS();

const topicArn = 'arn:aws:sns:us-east-2:189519505659:registerHaciendaAmbar';


// Obtener todos los objetos
const getUsers = async (req, res) => {
  jwt.verify(req.token,'seguridadAmbar', (error, authData) =>{
    if(error){
      res.sendStatus(403);
    }
    else{
      User.find((err, users) => {
        if (err) {
          res.send(err);
        }
        res.json(users);
      });
      
    }
  });
  
};
//buscar un elemento por su ID 

const getUser = async (req, res) => {
  jwt.verify(req.token, 'seguridadAmbar', (error, authData) =>{
    if(error){
      res.sendStatus(403);
    }
    else{
      User.findOne({  _id: req.params.userID }, (err, user) => {
        if (err) {
          res.send(err);
        }
        res.json(user);
      });
    }
  });
};
// validacion de datos login 
const validLogin = async (req, res) => {
  try {
    let username = req.params.userNOMBREDEUSUARIO
    let password = req.params.userPASSWORD
    let datos = []
    const user = await User.findOne({nombreDeUsuario: req.params.userNOMBREDEUSUARIO}).exec()
    jwt.sign({user: user}, "seguridadAmbar", (err, token) => {
      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" })
      } 
      if (username === user.nombreDeUsuario) {
        console.log("paso if user")
        if(password === user.password){
          console.log('paso if passw')
          datos.push(user._id, user.admin, user.nombreDeUsuario)
          datos.push(token);
          console.log(username, password, datos)
          return res.status(200).json({ datos })
        } else {
          return res.status(400).send({ message: "Contraseña incorrecta" })
        }
      } else {
        return res.status(400).send({ message: "Nombre de usuario incorrecto" })
      }
    });
  } catch (error) {
    console.error(error)
    return res.status(500).send({ error: "Error en el servidor" })
  }
};
// Crear un objeto con el formato indicado
const createUser = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'Request body missing' });
  }
 let correoRegister = req.body.correo;

  const user = new User({
    admin: req.body.admin || false,
    nombreDeUsuario: req.body.nombreDeUsuario,
    nombreCompleto: req.body.nombreCompleto,
    numTel: req.body.numTel,
    edad: req.body.edad,
    correo: req.body.correo,
    password: req.body.password,
  });
 
  user.save(async (err, user) => {
    if (err) {
      res.send(err);
    } /// no registra con correo estables 
    sns.subscribe({
      TopicArn: topicArn,
      Protocol: 'email',
      Endpoint: correoRegister
    }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Suscripción creada: ' + data.SubscriptionArn);
      }
    });
  });
  res.json(user);
  
};
// actualizar un elemento a partir del _id
const updateUser = async (req, res) => {
  jwt.verify(req.token,'seguridadAmbar', (error, authData) =>{
    User.findOneAndUpdate(
      { _id: req.params.userID },
      {
        $set: {
          admin: req.body.admin,
          nombreDeUsuario: req.body.nombreDeUsuario,
          nombreCompleto: req.body.nombreCompleto,
          numTel: req.body.numTel,
          edad: req.body.edad,
          correo: req.body.correo,
          password: req.body.password
        },
      },
      { new: true },
      (err, User) => {
        if (err) {
          res.send(err);
        } else res.json(User);
      }
    );
  });
 
};
// borrar un elemento a través del _id
const deleteUser = async (req, res) => {
  jwt.verify(req.token,'seguridadAmbar', (error, authData) =>{
    User.deleteOne({ _id: req.params.userID })
    .then(() => res.json({ message: "User Deleted" }))
    .catch((err) => res.send(err));
    
  });
};

module.exports = {
  getUsers,
  getUser,
  validLogin,
  createUser,
  updateUser,
  deleteUser
};
