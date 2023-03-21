  const verifyToken = require("../jwt");
  const router = require("express").Router();
  const rateLimit = require("express-rate-limit");

  const {
    getUsers,
    getUser,  
    validLogin,
    createUser,
    updateUser,
    deleteUser
  } = require("../controllers/users");

  //funcion para limitar peticiones
  const accountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 100, // limita cada IP a 6 peticiones por el tiempo definido con "windowMs"
    message: "Por seguridad restringimos peticiones de tu IP"
  });

  router.get("/",verifyToken,getUsers); 
  router.get("/:userID",verifyToken,getUser); 
  router.get("/:userNOMBREDEUSUARIO/:userPASSWORD",accountLimiter,validLogin ); 
  router.post("/",verifyToken,accountLimiter, createUser); 
  router.put("/:userID",verifyToken,accountLimiter,updateUser ); 
  router.delete("/:userID",verifyToken,accountLimiter,deleteUser);
  
  module.exports = router;