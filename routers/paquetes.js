const {
    getPaquetes,
    createPaquete,
    updatePaquete,
    deletePaquete
  } = require("../controllers/paquetes");

  const router = require("express").Router();

  router.get("/", getPaquetes); 
  router.post("/", createPaquete); 
  router.put("/:paqueteID", updatePaquete);
  router.delete("/:paqueteID", deletePaquete);

  module.exports = router;
  