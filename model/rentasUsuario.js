// Modelo de datos de Mongo
const mongoose = require("mongoose");

// Definicion del esquema a utilizar 
const RentaUsuarioSchema = new mongoose.Schema({
  
  idPaquete: {
    type: String,
    required: true,
  },
  idUser: {
    type: String,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFinalizacion: {
    type: Date,
    required: true,
  },
  fechaDeReserva: {
    type: Date,
    required: true,
  },
  precioTotal: {
    type: Number,
    required: true,
  },
  estadoRenta: {
    type: Boolean,
    required: true,
  },
  observaciones: {
    type: String,
    required: true,
  },
  SeEjecutoConExitoLarenta: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("RentaUsuario", RentaUsuarioSchema);