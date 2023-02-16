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



module.exports = {
getRentIndiv,
createRentIndv,
  
};
