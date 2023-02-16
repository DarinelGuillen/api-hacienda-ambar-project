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

// Crear un objeto con el formato indicado
const createRentaUsuario = async (req, res) => {
  const rentaUsuario = new RentaUsuario({
    idRenta: req.body.idRenta,
    precioTotal: req.body.precioTotal,
    fechaInicio: req.body.fechaInicio,
    fechaFinalizacion: req.body.fechaFinalizacion,
    estadoRenta: req.body.estadoRenta,
    fechaDeReserva: req.body.fechaDeReserva,
    nombreDePaquete: req.body.nombreDePaquete,
  });

  rentaUsuario.save( async (err, rentaUsuario) => {
    if (err) {
      res.send(err);
    }
    res.json(rentaUsuario);
  });
};




module.exports = {
getRentasUsuario,
createRentaUsuario,
};
