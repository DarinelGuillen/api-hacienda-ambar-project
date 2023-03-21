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
//Obtener just true EstadoRenta
const getFalseRentasUsuario = async (req, res) => {
  try {
    const falseEstadoRenta = await RentaUsuario.find({ estadoRenta: false });
    res.json(falseEstadoRenta);
  } catch (err) {
    res.send(err);
  }
}
//Obtener solo los que tengan estadoRenta:true y SeEjecutoConExitoLarenta:false
const getFinalizacion = async (req, res) => {
  try {
    const finalizacion = await RentaUsuario.find({
      estadoRenta: true,
      SeEjecutoConExitoLarenta: false
    });
    res.json(finalizacion);
  } catch (err) {
    res.send(err);
  }
}
//Obtener Una renta A traves De IDUser
const getIdRenta=async(req, res)=>{
  try{
    console.log("HOLA");
    let returnRenta=[];
    const rentasUsuario = await RentaUsuario.findOne({_id: req.params.idRenta}).exec()
    if (!rentasUsuario) {
      return res.status(404).send({ message: "Ninguna renta Disponible" })
    } 
    returnRenta.push(rentasUsuario)
    console.log(JSON.stringify(returnRenta),"////////",JSON.stringify(rentasUsuario.idUser));
    return res.status(200).json({returnRenta})

  }catch(error){
    console.log(error);
    return res.status(500).send({ error: "Error en el servidor" })
  }
  
}

//obttene a traves del id de usuari solo la rentas del x usuario

const getByIdUser = async (req, res) => {
 console.log("🚀 ~ file: rentasUsuario.js:57 ~ getByIdUser ~ req:", req)
 
  try{
    console.log("getBy ID USER");
    
    const rentasUsuario = await RentaUsuario.find({idUser: req.params.idUser}).exec()
    if (!rentasUsuario) {
      return res.status(404).send({ message: "Ninguna renta Disponible" })
    } 
    // returnRenta.push(rentasUsuario)
    // console.log(JSON.stringify(rentasUsuario),"////////",JSON.stringify(rentasUsuario));
    return res.status(200).json({rentasUsuario})

  }catch(error){
    console.log(error);
    return res.status(500).send({ error: "Error en el servidor" })
  }
};


// Crear un objeto con el formato indicado
const createRentaUsuario = async (req, res) => {
  const nuevaRenta = {
    idPaquete: req.body.idPaquete,
    idUser: req.body.idUser,
    fechaInicio: req.body.fechaInicio,
    horaDeInicio: req.body.horaDeInicio,
    horaDeFinalizacion: req.body.horaDeFinalizacion,
    fechaDeReserva: req.body.fechaDeReserva,
    Extras: req.body.Extras,
    estadoRenta: req.body.estadoRenta,
    observaciones: req.body.observaciones,
    SeEjecutoConExitoLarenta: req.body.SeEjecutoConExitoLarenta,
    LinkFotos: req.body.LinkFotos,
  };

  try {
    const rentaUsuario = new RentaUsuario(nuevaRenta);
    await rentaUsuario.save();
    res.status(201).json(rentaUsuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating renta usuario" });
  }
};

// actualizar un elemento a partir del _id
const updateEstadoRenta = async (req, res) => {
  const { rentaUsuarioID } = req.params; // Obtener el ID del documento desde los parámetros de la solicitud
  try {
    const result = await RentaUsuario.updateOne(
      { _id: rentaUsuarioID }, // Filtro para encontrar el documento que se quiere actualizar
      { $set: { estadoRenta: true } } // Actualización del campo estadoRenta a true
    );
    res.json(result); // Devolver la respuesta al cliente
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
///
const updateSeEjecutoConExitoLarenta = async (req, res) => {
  let DrentaUsuarioID = req.params.rentaUsuarioID
  let DestadoRenta = req.params.estadoRenta
  const { rentaUsuarioID } = req.params; // Obtener el ID del documento desde los parámetros de la solicitud
  const { estadoRenta } = req.body; // Obtener el valor del estadoRenta desde el cuerpo de la solicitud
  console.log(DrentaUsuarioID,DestadoRenta);
  try {
    if (Boolean(DestadoRenta)) {
      const result = await RentaUsuario.updateOne(
        { _id: rentaUsuarioID}, // Filtro para encontrar el documento que se quiere actualizar
        { $set: { SeEjecutoConExitoLarenta: true } } // Actualización de los campos estadoRenta y SeEjecutoConExitoLarenta
      );
      res.json(result); // Devolver la respuesta al cliente
    } else {
      res.status(400).json({ message: 'El estado de renta debe ser verdadero para actualizar SeEjecutoConExitoLarenta' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// const updateSeEjecutoConExitoLarenta = async (req, res) => {
//   const { rentaUsuarioID } = req.params; // Obtener el ID del documento desde los parámetros de la solicitud

//   try {
//     const renta = await RentaUsuario.findById(rentaUsuarioID); // Recuperar el documento correspondiente a rentaUsuarioID

//     if (!renta) {
//       return res.status(404).json({ message: "La renta no existe" });
//     }

//     if (renta.estadoRenta !== true) {
//       return res.status(400).json({ message: "El estado de la renta no es verdadero" });
//     }

//     const result = await RentaUsuario.updateOne(
//       { _id: rentaUsuarioID }, // Filtro para encontrar el documento que se quiere actualizar
//       { $set: { SeEjecutoConExitoLarenta: true } } // Actualización del campo SeEjecutoConExitoLarenta a true
//     );

//     res.json(result); // Devolver la respuesta al cliente
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// borrar un elemento a través del _id
const deleteRentaUsuario = async (req, res) => {
  RentaUsuario.deleteOne({ _id: req.params.rentaUsuarioID })
    .then(() => res.json({ message: "RentaUsuario Deleted" }))
    .catch((err) => res.send(err));
};
////////////
module.exports = {
  getRentasUsuario,
  getFalseRentasUsuario,
  getFinalizacion,
  getIdRenta,
  getByIdUser,
  createRentaUsuario,
  updateEstadoRenta,
  updateSeEjecutoConExitoLarenta,
  deleteRentaUsuario,
};
