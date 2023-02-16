// constante del modelo de datos
const Membresia = require("../model/membresias");

// Obtener todos los objetos
const getMembresias = async (req, res) => {
    Membresia.find((err, membresias) => {
    if (err) {
      res.send(err);
    }
    res.json(membresias);
  });
};



// 
module.exports = {
getMembresias,
  
};
