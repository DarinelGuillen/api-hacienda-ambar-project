// Modelo de datos de Mongo
const mongoose = require("mongoose");

// Definicion del esquema a utilizar 
const UserSchema = new mongoose.Schema({
  admin: {
    type: Boolean,
    required: true,
  },
  nombreDeUsuario: {
    type: String,
    required: true,
  },
  nombreCompleto: {
    type: String,
    default: true,
  },
  numTel: {
    type: String,
    default: true,
  },
  edad:{
    type: String,
    required: true,
  },
  coreo:{
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("User", UserSchema);