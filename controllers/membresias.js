// constante del modelo de datos
const Membresia = require("../model/membresias");

// Obtener todos los objetos
const getMembresias = async (req, res) => {
    Membresia.find((err, membresias) => {
    if (err) {
      res.send(err);
    }
    res.json(membresias);
  });
};

// Crear un objeto con el formato indicado
const createMembresia = async (req, res) => {
  const membresia = Membresia({
    nombre: req.body.nombre,
    fechaCorte: req.body.fechaCorte,
    descuento: req.body.descuento,
  });

  membresia.save( async (err, membresia) => {
    if (err) {
      res.send(err);
    }
    res.json(membresia);
  });
};

// actualizar un elemento a partir del _id
const updateMembresia = async (req, res) => {
  Membresia.findOneAndUpdate(
    { _id: req.params.membresiasID},
    {
      $set: {
        nombre: req.body.nombre,
        fechaCorte: req.body.fechaCorte,
        descuento: req.body.descuento,
      },
    },
    { new: true },
    (err, Membresia) => {
      if (err) {
        res.send(err);
      } else res.json(Membresia);
    }
  );
};



// 
module.exports = {
getMembresias,
createMembresia,
updateMembresia,
};
