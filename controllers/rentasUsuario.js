// constante del modelo de datos
const RentaUsuario = require("../model/rentasUsuario");

// Obtener todos los objetos
const getRentasUsuario = async (req, res) => {
    RentaUsuario.find((err, rentasUsuario) => {
    if (err) {
      res.send(err);
    }
    res.json(rentasUsuario);
  });
};




module.exports = {
getRentasUsuario,
};
