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




module.exports = {
  getAdminUsers
};