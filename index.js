// definicion de librerias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require('fs');
const https = require('https');


//routes
const userRouter = require("./routers/users")
const adminUsersRouter = require("./routers/adminUsers")
const membresiasRouter = require("./routers/membresias")
const paquetesRouter = require("./routers/paquetes")
const rentaIndividualesRouter = require("./routers/rentaIndividuales")
const rentasUsuarioRouter = require("./routers/rentasUsuario")




// variables de entorno
dotenv.config();

// Puerto 
const PORT = process.env.PORTSERVERAWS|| 8000;
const app = express();

// Libreria para mongodb - usa URL que debe existir en .env
// usa la Base de datos llamada mongo y la coleccion llamada todos
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

  
 app.use(cors());
// se usa con express, peticiones cruzadas.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/users",userRouter)
app.use("/adminusers",adminUsersRouter)
app.use("/membresias",membresiasRouter)
app.use("/paquetes",paquetesRouter)
app.use("/rentaindividuales",rentaIndividualesRouter)
app.use("/rentasUsuario",rentasUsuarioRouter)


const PORTSERVERAWS = process.env.PORTSERVERAWS;

https.createServer({
cert: fs.readFileSync('./certificates/fullchain1.pem','utf8'),
key: fs.readFileSync('./certificates/privkey1.pem','utf8')
},app).listen(PORTSERVERAWS, function(){
console.log('Servidor https corriendo en el puerto 443');
});