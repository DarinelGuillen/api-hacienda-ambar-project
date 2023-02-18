const {
    getAdminUsers,
    createAdminUser,
    updateAdminUser,
    deleteAdminUsers
  } = require("../controllers/adminUsers");

const router = require("express").Router();

router.get("/", getAdminUsers); 
router.post("/",createAdminUser);
router.put("/:adminUsersID",updateAdminUser);
router.delete("/:adminUsersID",deleteAdminUsers);

module.exports = router;