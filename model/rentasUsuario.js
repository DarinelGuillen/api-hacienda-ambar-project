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
    type: String,
    required: true,
  },
  horaDeInicio: {
    type: String,
    required: true,
  },
  horaDeFinalizacion: {
    type: String,
    required: true,
  },
  fechaDeReserva: {
    type: String,
    required: true,
  },
  Extras: {
    type: [String],
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
    required: false,
  },
  LinkFotos: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("RentaUsuario", RentaUsuarioSchema);