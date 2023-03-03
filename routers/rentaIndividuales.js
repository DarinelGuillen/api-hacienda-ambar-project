const {
    getRentIndiv,
    createRentIndv,
    updateRentIndv,
    deleteRentIndv
  } = require("../controllers/rentaIndividuales");

  const router = require("express").Router();

  

router.get("/", getRentIndiv); 
router.post("/", createRentIndv); 
router.put("/:rentaIndividualID", updateRentIndv);
router.delete("/:rentaIndividualID", deleteRentIndv); 

module.exports = router;