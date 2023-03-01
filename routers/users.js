const {
    getUsers,
    validLogin,
    createUser,
    updateUser,
    deleteUser
  } = require("../controllers/users");

  const router = require("express").Router();

  const rateLimit = require("express-rate-limit");
  
  //funcion para limitar peticiones
  const accountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 10, // limita cada IP a 6 peticiones por el tiempo definido con "windowMs"
    message: "Por seguridad restringimos peticiones de tu IP"
  });

  
  router.get("/",getUsers); 
  router.get("/:userNOMBREDEUSUARIO/:userPASSWORD",accountLimiter,validLogin ); 
  router.post("/",accountLimiter, createUser); 
  router.put("/:userID",accountLimiter,updateUser ); 
  router.delete("/:userID",accountLimiter,deleteUser);
  
  module.exports = router;