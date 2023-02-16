// Modelo de datos de Mongo
const mongoose = require("mongoose");

// Definicion del esquema a utilizar 
const RentaUsuarioSchema = new mongoose.Schema({
  idRenta: {
    type: Number,
    required: true,
  },
  precioTotal: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: String,
    default: false,
  },
  fechaFinalizacion: {
    type: String,
    default: true,
  },
  estadoRenta: {
    type: String,
    default: true,
  },
  fechaDeReserva: {
    type: String,
    default: true,
  },
  nombreDePaquete: {
    type: String,
    default: true,
  },
});

module.exports = mongoose.model("RentaUsuario", RentaUsuarioSchema);