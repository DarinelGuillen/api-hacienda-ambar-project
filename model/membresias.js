// Modelo de datos de Mongo
const mongoose = require("mongoose");

// Definicion del esquema a utilizar 
const MembresiaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  fechaCorte: {
    type: String,
    required: true,
  },
  descuento: {
    type: String,
    default: true,
  },
});

module.exports = mongoose.model("Membresia", MembresiaSchema);