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



module.exports = {
getRentIndiv,
  
};
