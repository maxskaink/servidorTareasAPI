const mongoose = require("mongoose")


const conectarDB = async () => {
    try {
        
        mongoose.connect(process.env.DATABASE_NCC)

        console.log("Se esta conectando con la base de datos")        

    } catch (error) {
        console.log(error)

        throw new Error("No se ha podido conectar con la base de datos")
    }
}


module.exports = conectarDB