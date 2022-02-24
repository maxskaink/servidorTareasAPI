// Importacion cosas necesarias
const express = require("express")
const cors = require("cors");
const conectarDB = require("../DataBase/configDB");


class Server {
    
    constructor() {
        this.port = process.env.PORT
        this.apiPathTareas = "/api/tareas/"
        this.apiPathUsuarios = "/api/usuarios/"
        //Inicar express
        this.app = express()
        
        //Middlewares
        this.middlewares()
        //Configuracion Rutas
        this.routes()
        //conectar con la DB
        this.conectarConDB()

    }
    async conectarConDB() {
        conectarDB()
    }

    middlewares() {
        //Cors
        this.app.use( cors() )
        // lectura y parseo del body
        this.app.use( express.json())
        //Directorio publico
        this.app.use( express.static("public") )
    }

    routes() {
        this.app.use(this.apiPathTareas, require("../routes/apiTareas"))
        this.app.use(this.apiPathUsuarios, require("../routes/apiUsuarios"))
    }

    listen() {

        this.app.listen(this.port, (msg) => console.log(`Servidor iniciado en el puerto: ${this.port}`))
    
    }
}


module.exports = Server;