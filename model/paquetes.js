// Modelo de datos de Mongo
const mongoose = require("mongoose");

// Definicion del esquema a utilizar 
const PaqueteSchema = new mongoose.Schema({
   nombrePaquete: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    default: true,
  },
  descripcion: {
    type: String,
    default: true,
  },
});

module.exports = mongoose.model("Paquete", PaqueteSchema);
