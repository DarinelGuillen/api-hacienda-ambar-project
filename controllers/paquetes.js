// constante del modelo de datos
const Paquete = require("../model/paquetes");

// Obtener todos los objetos
const getPaquetes = async (req, res) => {
    Paquete.find((err, paquetes) => {
    if (err) {
      res.send(err);
    }
    res.json(paquetes);
  });
};




module.exports = {
getPaquetes
};