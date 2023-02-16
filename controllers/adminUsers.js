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

// actualizar un elemento a partir del _id
const updateAdminUser = async (req, res) => {
  AdminUsers.findOneAndUpdate(
    { _id: req.params.adminUsersID },
    {
      $set: {
        nombreAdmin: req.body.nombreAdmin,
        password: req.body.password
      },
    },
    { new: true },
    (err, AdminUsers) => {
      if (err) {
        res.send(err);
      } else res.json(AdminUsers);
    }
  );
};
// borrar un elemento a través del _id
const deleteAdminUsers = async (req, res) => {
  AdminUsers.deleteOne({ _id: req.params.adminUsersID })
    .then(() => res.json({ message: "AdminUsers Deleted" }))
    .catch((err) => res.send(err));
};



module.exports = {
  getAdminUsers,
  createAdminUser,
  updateAdminUser,
  deleteAdminUsers
};