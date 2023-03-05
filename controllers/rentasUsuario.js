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
  const nuevaRenta = {
    
    idPaquete: req.body.idPaquete ,
    idUser: req.body.idUser,
    fechaInicio: req.body.fechaInicio,
    horaDeInicio: req.body.horaDeInicio,
    horaDeFinalizacion: req.body.horaDeFinalizacion,
    fechaDeReserva: req.body.fechaDeReserva,
    Extras: req.body.Extras,
    estadoRenta: req.body.estadoRenta,
    observaciones: req.body.observaciones,
    SeEjecutoConExitoLarenta: req.body.SeEjecutoConExitoLarenta
  };

  try {
    const rentaUsuario = new RentaUsuario(nuevaRenta);
    await rentaUsuario.save();
    res.status(201).json(rentaUsuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating renta usuario' });
  }
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
