// constante del modelo de datos
const RentaIndividual = require("../model/rentaIndividuales");
const jwt = require("jsonwebtoken");

// Obtener todos los objetos
const getRentIndiv = async (req, res) => {
  jwt.verify(req.token,'seguridadAmbar', (error, authData) =>{
    RentaIndividual.find((err, rentaindividuales) => {
      if (err) {
        res.send(err);
      }
      res.json(rentaindividuales);
    });
    
  });
  
};
//obtener un objeto por el id 
const getRentaIndiviual =  (req, res) => {
  jwt.verify(req.token,'seguridadAmbar', (error, authData) =>{
    RentaIndividual.findOne({  _id: req.params.rentIndvID },
      (err, rentaIndividual) => {
      if (err) {
        res.send(err);
      }
      res.json(rentaIndividual);
    });
  });
};

// Crear un objeto con el formato indicado
const createRentIndv =  (req, res) => {
   jwt.verify(req.token,'seguridadAmbar', (error, authData) =>{
    const rentaIndividual = new RentaIndividual({
      idNum: req.body.idNum,
      precioAprox: req.body.precioAprox,
      descripcion: req.body.descripcion,
      value: req.body.value,
      cortoPlazo: req.body.cortoPlazo,
      normal: req.body.normal,
      ultimoMinuto: req.body.ultimoMinuto,
    });
    try {
      const newRentaIndividual =  rentaIndividual.save();
      res.status(201).json(newRentaIndividual);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
};

// actualizar un elemento a partir del _id
const updateRentIndv = async (req, res) => {
  jwt.verify(req.token,'seguridadAmbar', (error, authData) =>{
    RentaIndividual.findOneAndUpdate(
      { _id: req.params.rentaIndividualID },
      {
        $set: {
          idNum: req.body.idNum,
          precioAprox: req.body.precioAprox,
          descripcion: req.body.descripcion,
          value: req.body.value,
          cortoPlazo: req.body.cortoPlazo,
          normal: req.body.normal,
          ultimoMinuto: req.body.ultimoMinuto,
        },
      },
      { new: true },
      (err, RentaIndividual) => {
        if (err) {
          res.send(err);
        } else res.json(RentaIndividual);
      }
    );
  });
};
// borrar un elemento a través del _id
const deleteRentIndv = async (req, res) => {
  jwt.verify(req.token,'seguridadAmbar', (error, authData) =>{
    RentaIndividual.deleteOne({ _id: req.params.rentaIndividualID })
      .then(() => res.json({ message: "RentaIndividual Deleted" }))
      .catch((err) => res.send(err));
  });
};

module.exports = {
  getRentIndiv,
  getRentaIndiviual,
  createRentIndv,
  updateRentIndv,
  deleteRentIndv,
};
