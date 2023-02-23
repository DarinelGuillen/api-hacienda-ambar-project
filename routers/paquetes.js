const {
    getPaquetes,
    getPaquete,
    createPaquete,
    updatePaquete,
    deletePaquete
  } = require("../controllers/paquetes");

  const router = require("express").Router();

  router.get("/", getPaquetes); 
  router.get("/:paqueteID", getPaquete); 
  router.post("/", createPaquete); 
  router.put("/:paqueteID", updatePaquete);
  router.delete("/:paqueteID", deletePaquete);

  module.exports = router;
  