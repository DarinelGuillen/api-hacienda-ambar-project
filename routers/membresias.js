const {
    getMembresias,
    createMembresia,
    updateMembresia,
    deleteMembresia
  } = require("../controllers/membresias");

const router = require("express").Router();

router.get("/", getMembresias); 
router.post("/", createMembresia); 
router.put("/:membresiasID",updateMembresia);
router.delete("/:membresiaID",deleteMembresia);

module.exports = router;
