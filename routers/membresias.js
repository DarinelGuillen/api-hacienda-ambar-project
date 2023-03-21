const verifyToken = require("../jwt");
const router = require("express").Router();

const {
    getMembresias,
    createMembresia,
    updateMembresia,
    deleteMembresia
  } = require("../controllers/membresias");


router.get("/",verifyToken,getMembresias); 
router.post("/",verifyToken,createMembresia); 
router.put("/:membresiasID",verifyToken,updateMembresia);
router.delete("/:membresiaID",verifyToken,deleteMembresia);

module.exports = router;
