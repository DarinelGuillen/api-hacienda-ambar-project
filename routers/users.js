const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
  } = require("../controllers/users");

  const router = require("express").Router();

  router.get("/", getUsers); 
  router.get("/:userNOMBREDEUSUARIO/:userPASSWORD",getUser ); 
  router.post("/", createUser); 
  router.put("/:userID",updateUser ); 
  router.delete("/:userID",deleteUser);
  
  module.exports = router;