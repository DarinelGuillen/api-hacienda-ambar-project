// Modelo de datos de Mongo
const mongoose = require("mongoose");

// Definicion del esquema a utilizar 
const RenIndvSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  precio: {
    type: String,
    required: true,
  },
  tiempo: {
    type: String,
    default: true,
  },
  
});

module.exports = mongoose.model("RentaIndividual", RenIndvSchema);