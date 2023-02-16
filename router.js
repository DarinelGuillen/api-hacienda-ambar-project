// DEFINICION DE RUTAS

//--------AdminUser----------------------//
const {
  getAdminUsers,
} = require("./controllers/adminUsers");
//--------paquete----------------------//
const {
  getPaquetes,
} = require("./controllers/paquetes");
//--------rentaUsuario----------------------//
const {
  getRentasUsuario,
} = require("./controllers/rentasUsuario");
//--------MEMBRESIAS----------------------//
const {
  getMembresias,
} = require("./controllers/membresias");
//--------USERS----------------------//
const {
  getUsers,
} = require("./controllers/users");
//--------RENTAS INDIVIDUALES----------------------//
const {
  getRentIndiv,
} = require("./controllers/rentaIndividuales");


const router = require("express").Router();

// ruta get principal
router.get("/", async (req, res) => {
  res.send("Let's build a CRUD API!");
});

//--------AdminUser----------------------//
router.get("/adminusers", getAdminUsers); 

//--------PAQUETES----------------------//
router.get("/paquetes", getPaquetes); 
//--------rentaUsuarios----------------------//
router.get("/rentasUsuario", getRentasUsuario); 
//--------MEMBRESIAS----------------------//
router.get("/membresias", getMembresias); 
//----------USERS----------------------//
router.get("/users", getUsers); 
//----------RENTA INDIVIDUAL----------------------//
router.get("/rentaindividuales", getRentIndiv); 




module.exports = router;
