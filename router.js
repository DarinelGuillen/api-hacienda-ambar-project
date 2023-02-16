// DEFINICION DE RUTAS

//--------AdminUser----------------------//
const {
  getAdminUsers,
  createAdminUser,
  updateAdminUser,
  deleteAdminUsers
} = require("./controllers/adminUsers");
//--------paquete----------------------//
const {
  getPaquetes,
  createPaquete,
  updatePaquete,
  deletePaquete
} = require("./controllers/paquetes");
//--------rentaUsuario----------------------//
const {
  getRentasUsuario,
  createRentaUsuario,
  updateRentaUsuario,
  deleteRentaUsuario
} = require("./controllers/rentasUsuario");
//--------MEMBRESIAS----------------------//
const {
  getMembresias,
  createMembresia,
  updateMembresia,
  deleteMembresia
} = require("./controllers/membresias");
//--------USERS----------------------//
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require("./controllers/users");
//--------RENTAS INDIVIDUALES----------------------//
const {
  getRentIndiv,
  createRentIndv,
  updateRentIndv,
  deleteRentIndv
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
router.delete("/adminusers/:adminUsersID",deleteAdminUsers);

//--------PAQUETES----------------------//
router.get("/paquetes", getPaquetes); 
router.post("/paquetes", createPaquete); 
router.put("/paquetes/:paqueteID", updatePaquete);
router.delete("/paquetes/:paqueteID", deletePaquete);

//--------rentaUsuarios----------------------//
router.get("/rentasUsuario", getRentasUsuario); 
router.post("/rentasUsuario", createRentaUsuario);
router.put("/rentasUsuario/:rentaUsuarioID", updateRentaUsuario);
router.delete("/rentasUsuario/:rentaUsuarioID", deleteRentaUsuario);
//--------MEMBRESIAS----------------------//
router.get("/membresias", getMembresias); 
router.post("/membresias", createMembresia); 
router.put("/membresias/:membresiasID",updateMembresia);
router.delete("/membresias/:membresiaID",deleteMembresia);
//----------USERS----------------------//
router.get("/users", getUsers); 
router.get("/user/:userID", getUser); 
router.post("/users", createUser); 
router.put("/users/:userID",updateUser ); 
router.delete("/users/:userID",deleteUser);

//----------RENTA INDIVIDUAL----------------------//
router.get("/rentaindividuales", getRentIndiv); 
router.post("/rentaindividuales", createRentIndv); 
router.put("/rentaindividuales/:rentaIndividualID", updateRentIndv);
router.delete("/rentaindividuales/:rentaIndividualID", deleteRentIndv); 


module.exports = router;
