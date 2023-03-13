const {
    getRentIndiv,
    getRentaIndiviual,
    createRentIndv,
    updateRentIndv,
    deleteRentIndv
  } = require("../controllers/rentaIndividuales");

  const router = require("express").Router();

  

router.get("/", getRentIndiv); 
router.get("/:rentIndvID", getRentaIndiviual); 
router.post("/", createRentIndv); 
router.put("/:rentaIndividualID", updateRentIndv);
router.delete("/:rentaIndividualID", deleteRentIndv); 

module.exports = router;