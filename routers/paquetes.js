const router = require("express").Router();
const verifyToken = require("../jwt");
const {
    getPaquetes,
    getPaquete,
    createPaquete,
    updatePaquete,
    deletePaquete
  } = require("../controllers/paquetes");


  router.get("/",verifyToken, getPaquetes); 
  router.get("/:paqueteID",verifyToken,verifyToken,getPaquete); 
  router.post("/",verifyToken,createPaquete); 
  router.put("/:paqueteID",verifyToken,updatePaquete);
  router.delete("/:paqueteID",verifyToken,deletePaquete);

  module.exports = router;
  