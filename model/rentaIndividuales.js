// Modelo de datos de Mongo
const mongoose = require("mongoose");

// Definicion del esquema a utilizar
const RenIndvSchema = new mongoose.Schema({
  idNum: {
    type: Number,
    required: true,
  },
  precioAprox: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  cortoPlazo: {
    type: Boolean,
    required: true,
  },
  normal: {
    type: Boolean,
    required: true,
  },
  ultimoMinuto: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("RentaIndividual", RenIndvSchema);
