const verifyToken = require("../jwt");
const router = require("express").Router();

const {
    getAdminUsers,
    createAdminUser,
    updateAdminUser,
    deleteAdminUsers
  } = require("../controllers/adminUsers");


router.get("/", getAdminUsers); 
router.post("/",createAdminUser);
router.put("/:adminUsersID",verifyToken,updateAdminUser);
router.delete("/:adminUsersID",verifyToken,deleteAdminUsers);

module.exports = router;