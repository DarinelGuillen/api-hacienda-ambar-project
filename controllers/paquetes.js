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
//Encontrar paquete por _ID
const getPaquete = async (req, res) => {
  
  Paquete.findOne({  _id: req.params.paqueteID }, (err, paquete) => {
    if (err) {
      res.send(err);
    }
    res.json(paquete);
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

// actualizar un elemento a partir del _id
const updatePaquete = async (req, res) => {
  Paquete.findOneAndUpdate(
    { _id: req.params.paqueteID },
    {
      $set: {
        nombrePaquete: req.body.nombrePaquete,
        precio: req.body.precio,
        img: req.body.img,
        descripcion: req.body.descripcion,
      },
    },
    { new: true },
    (err, Paquete) => {
      if (err) {
        res.send(err);
      } else res.json(Paquete);
    }
  );
};
// borrar un elemento a través del _id
const deletePaquete = async (req, res) => {
  Paquete.deleteOne({ _id: req.params.paqueteID })
    .then(() => res.json({ message: "Paquete Deleted" }))
    .catch((err) => res.send(err));
};



module.exports = {
getPaquetes,
getPaquete,
createPaquete,
updatePaquete,
deletePaquete
};