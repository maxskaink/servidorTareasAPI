//Traer variables externas
require("dotenv").config()

//Importaciones locales
const Server = require("./models/server")



//Crear el modelo del servidor
const server = new Server()


//Poner alerta el servidor 
server.listen()