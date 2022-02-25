const { Schema, model} = require("mongoose")


const usuarioShcema = Schema({
    nombre: {
        type: String,
        required: [true, "Es necesario un nombre"]
    },
    correo: {
        type:String,
        required: [true, "Es ncesario tener un correo"]
    },
    contraseña: {
        type:String,
        required: [true, "Es necesario tener una contraseña"]
    },
    estado: {
        type:Boolean,
        default: true
    }
})

usuarioShcema.methods.toJSON = function () {
    
    const {__v, _id ,contraseña, ...usuario} = this.toObject()

    return usuario
}



module.exports = model("Usuario", usuarioShcema)