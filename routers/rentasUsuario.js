const {
    getRentasUsuario,
    getFalseRentasUsuario,
    getFinalizacion,
    getIdRenta,
    getByIdUser,
    createRentaUsuario,
    updateEstadoRenta,
    updateSeEjecutoConExitoLarenta,
    deleteRentaUsuario
    
  } = require("../controllers/rentasUsuario");

const router = require("express").Router();

const rateLimit = require("express-rate-limit");

const accountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000 * 24, // 1 dia
  max: 1, // limita cada IP a 6 peticiones por el tiempo definido con "windowMs"
  message: "Por seguridad restringimos peticiones de tu IP"
});

router.get("/",getRentasUsuario); 
router.get("/estadoFalse",getFalseRentasUsuario); 
router.get("/Finalizar",getFinalizacion); 
router.get("/:idRenta",getIdRenta); 
router.get("/:idUser/:true",getByIdUser); 
router.post("/", accountLimiter, createRentaUsuario);
router.put("/:rentaUsuarioID", updateEstadoRenta);
router.put("/:rentaUsuarioID/:estadoRenta", updateSeEjecutoConExitoLarenta);
router.delete("/:rentaUsuarioID", deleteRentaUsuario);

module.exports = router;