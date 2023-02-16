// constante del modelo de datos
const AdminUsers = require("../model/adminUsers");

// Obtener todos los objetos
const getAdminUsers = async (req, res) => {
  AdminUsers.find((err,todosUsers) => {
    if (err) {
      res.send(err);
    }
    res.json(todosUsers);
  });
};
// Crear un objeto con el formato indicado
const createAdminUser = async (req, res) => {
  const adminUser = new AdminUsers({
    nombreAdmin: req.body.nombreAdmin,
    password: req.body.nombreAdmin
  });

  adminUser.save( async (err, adminUser) => {
    if (err) {
      res.send(err);
    }
    res.json(adminUser);
  });
};




module.exports = {
  getAdminUsers,
  createAdminUser,
};