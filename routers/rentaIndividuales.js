const verifyToken = require("../jwt");
const router = require("express").Router();

const {
    getRentIndiv,
    getRentaIndiviual,
    createRentIndv,
    updateRentIndv,
    deleteRentIndv
  } = require("../controllers/rentaIndividuales");

router.get("/", getRentIndiv); 
router.get("/:rentIndvID", getRentaIndiviual); 
router.post("/", createRentIndv); 
router.put("/:rentaIndividualID",verifyToken,updateRentIndv);
router.delete("/:rentaIndividualID",verifyToken,deleteRentIndv); 

module.exports = router;