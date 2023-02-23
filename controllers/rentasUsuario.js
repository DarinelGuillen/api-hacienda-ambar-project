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
    idPaquete: req.body.idPaquete,
    idUser: req.body.idUser,
    fechaInicio: req.body.fechaInicio,
    fechaFinalizacion: req.body.fechaFinalizacion,
    fechaDeReserva: req.body.fechaDeReserva,
    estadoRenta: req.body.estadoRenta,
    precioTotal: req.body.precioTotal,
    fechaDeReserva: req.body.fechaDeReserva,
    estadoRenta: req.body.estadoRenta,
    observaciones: req.body.observaciones,
    SeEjecutoConExitoLarenta: req.body.SeEjecutoConExitoLarenta,
  });

  rentaUsuario.save(async (err, rentaUsuario) => {
    if (err) {
      res.send(err);
    }
    res.json(rentaUsuario);
  });
};

// actualizar un elemento a partir del _id
const updateRentaUsuario = async (req, res) => {
  RentaUsuario.findOneAndUpdate(
    { _id: req.params.rentaUsuarioID },
    {
      $set: {
        idRenta: req.body.idRenta,
        precioTotal: req.body.precioTotal,
        fechaInicio: req.body.fechaInicio,
        fechaFinalizacion: req.body.fechaFinalizacion,
        estadoRenta: req.body.estadoRenta,
        fechaDeReserva: req.body.fechaDeReserva,
        nombreDePaquete: req.body.nombreDePaquete,
      },
    },
    { new: true },
    (err, RentaUsuario) => {
      if (err) {
        res.send(err);
      } else res.json(RentaUsuario);
    }
  );
};
// borrar un elemento a través del _id
const deleteRentaUsuario = async (req, res) => {
  RentaUsuario.deleteOne({ _id: req.params.rentaUsuarioID })
    .then(() => res.json({ message: "RentaUsuario Deleted" }))
    .catch((err) => res.send(err));
};



module.exports = {
getRentasUsuario,
createRentaUsuario,
updateRentaUsuario,
deleteRentaUsuario
};
