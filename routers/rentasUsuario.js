const router = require("express").Router();
const rateLimit = require("express-rate-limit");
const verifyToken = require("../jwt");

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


const accountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000 * 24, // 1 dia
  max: 1, // limita cada IP a 6 peticiones por el tiempo definido con "windowMs"
  message: "Por seguridad restringimos peticiones de tu IP"
});

router.get("/",verifyToken,getRentasUsuario); 
router.get("/estadoFalse",verifyToken,getFalseRentasUsuario); 
router.get("/Finalizar",verifyToken,getFinalizacion); 
router.get("/:idRenta",verifyToken,getIdRenta); 
router.get("/:idUser/:true",verifyToken,getByIdUser); 
router.post("/",accountLimiter,verifyToken,createRentaUsuario);
router.put("/:rentaUsuarioID",verifyToken,updateEstadoRenta);
router.put("/:rentaUsuarioID/:estadoRenta",verifyToken,updateSeEjecutoConExitoLarenta);
router.delete("/:rentaUsuarioID",verifyToken,deleteRentaUsuario);

module.exports = router;