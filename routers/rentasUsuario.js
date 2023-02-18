const {
    getRentasUsuario,
    createRentaUsuario,
    updateRentaUsuario,
    deleteRentaUsuario
  } = require("../controllers/rentasUsuario");

const router = require("express").Router();

router.get("/", getRentasUsuario); 
router.post("/", createRentaUsuario);
router.put("/:rentaUsuarioID", updateRentaUsuario);
router.delete("/:rentaUsuarioID", deleteRentaUsuario);

module.exports = router;