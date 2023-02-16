// Modelo de datos de Mongo
const mongoose = require("mongoose");

// Definicion del esquema a utilizar 
const AdminUsersSchema = new mongoose.Schema({
  nombreAdmin: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AdminUsers", AdminUsersSchema);