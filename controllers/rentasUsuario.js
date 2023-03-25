// constante del modelo de datos
const RentaUsuario = require("../model/rentasUsuario");
const jwt = require("jsonwebtoken");

// Obtener todos los objetos
const getRentasUsuario = async (req, res) => {
  jwt.verify(req.token, "seguridadAmbar", (error, authData) => {
    RentaUsuario.find((err, rentasUsuario) => {
      if (err) {
        res.send(err);
      }
      res.json(rentasUsuario);
    });
  });
};
//Obtener just true EstadoRenta
const getFalseRentasUsuario = async (req, res) => {
  try {
    const authData = await jwt.verify(req.token, "seguridadAmbar");

    const falseEstadoRenta = await RentaUsuario.find({ estadoRenta: false });
    res.json(falseEstadoRenta);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error en el servidor" });
  }
};
//Obtener solo los que tengan estadoRenta:true y SeEjecutoConExitoLarenta:false
const getFinalizacion = async (req, res) => {
  try {
    const authData = await jwt.verify(req.token, "seguridadAmbar");

    const finalizacion = await RentaUsuario.find({
      estadoRenta: true,
      SeEjecutoConExitoLarenta: false,
    });
    res.json(finalizacion);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error en el servidor" });
  }
};
//Obtener Una renta A traves De IDUser
const getIdRenta = async (req, res) => {
  try {
    const authData = await jwt.verify(req.token, "seguridadAmbar");
    console.log(
      "🚀 ~ file: rentasUsuario.js:47 ~ getIdRenta ~ req.token:",
      req.token
    );
    console.log("HOLA");
    let returnRenta = [];
    const rentasUsuario = await RentaUsuario.findOne({
      _id: req.params.idRenta,
    }).exec();
    if (!rentasUsuario) {
      return res.status(404).send({ message: "Ninguna renta Disponible" });
    }
    returnRenta.push(rentasUsuario);
    // console.log(
    //   JSON.stringify(returnRenta),
    //   "////////",
    //   JSON.stringify(rentasUsuario.idUser)
    // );
    return res.status(200).json({ returnRenta });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error en el servidor" });
  }
};

//obttene a traves del id de usuari solo la rentas del x usuario

const getByIdUser = async (req, res) => {
  try {
    const authData = await jwt.verify(req.token, "seguridadAmbar");
    console.log(
      "🚀 ~ file: rentasUsuario.js:57 ~ getByIdUser ~ req:",
      req.token
    );

    console.log("getBy ID USER", req.params.idUser, "==", req.params.true);

    const rentasUsuario = await RentaUsuario.find({
      idUser: req.params.idUser,
    }).exec();

    if (!rentasUsuario) {
      return res.status(404).send({ message: "Ninguna renta Disponible" });
    } else {
      console.log(
        JSON.stringify(rentasUsuario),
        "////////",
        JSON.stringify(rentasUsuario)
      );
      return res.status(200).json({ rentasUsuario });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error en el servidor" });
  }
};

// Crear un objeto con el formato indicado
const createRentaUsuario = async (req, res) => {
  try {
    const authData = await jwt.verify(req.token, "seguridadAmbar");

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
    console.log("\n\n\n\n\n\n\n\n\n\n🚀 ~ file: rentasUsuario.js:122 ~ createRentaUsuario ~ nuevaRenta:", JSON.stringify(nuevaRenta),"\n\n\n\n\n\n\n\n\n\n")

    const rentaUsuario = await new RentaUsuario(nuevaRenta);
    await rentaUsuario.save();
    res.status(201).json(rentaUsuario);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating renta usuario" });
  }
};


// actualizar un elemento a partir del _id
const updateEstadoRenta = async(req, res) => {
  

  try {
    const authData = await jwt.verify(req.token, "seguridadAmbar");
    console.log("🚀 ~ file: rentasUsuario.js:138 ~ updateEstadoRenta ~ req.token:", req.token)

      // const { rentaUsuarioID } = req.params; // Obtener el ID del documento desde los parámetros de la solicitud
      
        const result = await RentaUsuario.updateOne(
          { _id: req.params.rentaUsuarioID }, // Filtro para encontrar el documento que se quiere actualizar
          { $set: { estadoRenta: true } } // Actualización del campo estadoRenta a true
        );
        res.json(result); // Devolver la respuesta al cliente
        console.log("🚀 ~ file: rentasUsuario.js:147 ~ updateEstadoRenta ~ result:", result)
      
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error en el servidor" });
  }
};
///
const updateSeEjecutoConExitoLarenta = async(req, res) => {
  try{
  const authData = await jwt.verify(req.token, "seguridadAmbar");
  console.log("🚀 ~ file: rentasUsuario.js:158 ~ updateSeEjecutoConExitoLarenta ~ req.token:", req.token)

      console.log("🚀 ~ file: rentasUsuario.js:163 ~ updateSeEjecutoConExitoLarenta ~ DestadoRenta:", req.params.estadoRenta)
      console.log("🚀 ~ file: rentasUsuario.js:163 ~ updateSeEjecutoConExitoLarenta ~ DrentaUsuarioID:", req.params.rentaUsuarioID)
      if (Boolean(req.params.estadoRenta)) {
        const result = await RentaUsuario.updateOne(
          { _id: req.params.rentaUsuarioID }, // Filtro para encontrar el documento que se quiere actualizar
          { $set: { SeEjecutoConExitoLarenta: true } } // Actualización de los campos estadoRenta y SeEjecutoConExitoLarenta
        );
        res.json(result); // Devolver la respuesta al cliente
        console.log("🚀 ~ file: rentasUsuario.js:170 ~ updateSeEjecutoConExitoLarenta ~ result:", JSON.stringify(result))
      } else {
        res.status(400).json({
          message:
            "El estado de renta debe ser verdadero para actualizar SeEjecutoConExitoLarenta",
        });
      }
  }catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error en el servidor" });
  }
};

// borrar un elemento a través del _id
const deleteRentaUsuario = async (req, res) => {
  jwt.verify(req.token, "seguridadAmbar", (error, authData) => {
    RentaUsuario.deleteOne({ _id: req.params.rentaUsuarioID })
      .then(() => res.json({ message: "RentaUsuario Deleted" }))
      .catch((err) => res.send(err));
  });
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
