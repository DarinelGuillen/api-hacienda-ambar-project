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
} = require("./controllers/paquetes");
//--------rentaUsuario----------------------//
const {
  getRentasUsuario,
  createRentaUsuario,
} = require("./controllers/rentasUsuario");
//--------MEMBRESIAS----------------------//
const {
  getMembresias,
  createMembresia,
} = require("./controllers/membresias");
//--------USERS----------------------//
const {
  getUsers,
  createUser,
} = require("./controllers/users");
//--------RENTAS INDIVIDUALES----------------------//
const {
  getRentIndiv,
  createRentIndv,
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
//--------rentaUsuarios----------------------//
router.get("/rentasUsuario", getRentasUsuario); 
router.post("/rentasUsuario", createRentaUsuario); 
//--------MEMBRESIAS----------------------//
router.get("/membresias", getMembresias); 
router.post("/membresias", createMembresia); 
//----------USERS----------------------//
router.get("/users", getUsers); 
router.post("/users", createUser); 

//----------RENTA INDIVIDUAL----------------------//
router.get("/rentaindividuales", getRentIndiv); 
router.post("/rentaindividuales", createRentIndv); 




module.exports = router;
