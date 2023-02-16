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

// Crear un objeto con el formato indicado
const createPaquete = async (req, res) => {
  const paquete = Paquete ({
    nombrePaquete: req.body.nombrePaquete,
    precio: req.body.precio,
    img: req.body.img,
    descripcion: req.body.descripcion,
  });

  paquete.save( async (err, paquete) => {
    if (err) {
      res.send(err);
    }
    res.json(paquete);
  });
};




module.exports = {
getPaquetes,
createPaquete,
};