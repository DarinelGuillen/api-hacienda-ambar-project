// DEFINICION DE RUTAS

//--------AdminUser----------------------//
const {
  getAdminUsers,
  createAdminUser,
  updateAdminUser,
} = require("./controllers/adminUsers");
//--------paquete----------------------//
const {
  getPaquetes,
  createPaquete,
  updatePaquete,
} = require("./controllers/paquetes");
//--------rentaUsuario----------------------//
const {
  getRentasUsuario,
  createRentaUsuario,
  updateRentaUsuario
} = require("./controllers/rentasUsuario");
//--------MEMBRESIAS----------------------//
const {
  getMembresias,
  createMembresia,
  updateMembresia,
} = require("./controllers/membresias");
//--------USERS----------------------//
const {
  getUsers,
  createUser,
  updateUser
} = require("./controllers/users");
//--------RENTAS INDIVIDUALES----------------------//
const {
  getRentIndiv,
  createRentIndv,
  updateRentIndv
} = require("./controllers/rentaIndividuales");


const router = require("express").Router();

// ruta get principal
router.get("/", async (req, res) => {
  res.send("Let's build a CRUD API!");
});

//--------AdminUser----------------------//
router.get("/adminusers", getAdminUsers); 
router.post("/adminusers",createAdminUser);
router.put("/adminusers/:adminUsersID",updateAdminUser);
//--------PAQUETES----------------------//
router.get("/paquetes", getPaquetes); 
router.post("/paquetes", createPaquete); 
router.put("/paquetes/:paqueteID", updatePaquete);
//--------rentaUsuarios----------------------//
router.get("/rentasUsuario", getRentasUsuario); 
router.post("/rentasUsuario", createRentaUsuario);
router.put("/rentasUsuario/:rentaUsuarioID", updateRentaUsuario);
//--------MEMBRESIAS----------------------//
router.get("/membresias", getMembresias); 
router.post("/membresias", createMembresia); 
router.put("/membresias/:membresiasID",updateMembresia);
//----------USERS----------------------//
router.get("/users", getUsers); 
router.post("/users", createUser); 
router.put("/users/:userID",updateUser ); 
//----------RENTA INDIVIDUAL----------------------//
router.get("/rentaindividuales", getRentIndiv); 
router.post("/rentaindividuales", createRentIndv); 
router.put("/rentaindividuales/:rentaIndividualID", updateRentIndv); 






module.exports = router;
