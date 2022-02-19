// Importacion cosas necesarias
const express = require("express")
const cors = require("cors");
const conectarDB = require("../DataBase/configDB");


class Server {
    
    constructor() {
        this.port = process.env.PORT
        this.apiPath = "/api"
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
        this.app.use(this.apiPath, require("../routes/api"))
    }

    listen() {

        this.app.listen(this.port, (msg) => console.log(`Servidor iniciado en el puerto: ${this.port}`))
    
    }
}


module.exports = Server;