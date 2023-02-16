// constante del modelo de datos
const RentaIndividual = require("../model/rentaIndividuales");

// Obtener todos los objetos
const getRentIndiv = async (req, res) => {
RentaIndividual.find((err,rentaindividuales) => {
    if (err) {
      res.send(err);
    }
    res.json(rentaindividuales);
  });
};

// Crear un objeto con el formato indicado
const createRentIndv = async (req, res) => {
  const rentaIndividual = new RentaIndividual({
    id: req.body.id,
    precio: req.body.precio,
    tiempo: req.body.tiempo,
  });

  rentaIndividual.save( async (err, rentaIndividual) => {
    if (err) {
      res.send(err);
    }
    res.json(rentaIndividual);
  });
};

// actualizar un elemento a partir del _id
const updateRentIndv = async (req, res) => {
  RentaIndividual.findOneAndUpdate(
    { _id: req.params.rentaIndividualID },
    {
      $set: {
        id: req.body.id,
        precio: req.body.precio,
        tiempo: req.body.tiempo,
      },
    },
    { new: true },
    (err, RentaIndividual) => {
      if (err) {
        res.send(err);
      } else res.json(RentaIndividual);
    }
  );
};
// borrar un elemento a través del _id
const deleteRentIndv = async (req, res) => {
  RentaIndividual.deleteOne({ _id: req.params.rentaIndividualID })
    .then(() => res.json({ message: "RentaIndividual Deleted" }))
    .catch((err) => res.send(err));
};


module.exports = {
getRentIndiv,
createRentIndv,
updateRentIndv,
deleteRentIndv
};
