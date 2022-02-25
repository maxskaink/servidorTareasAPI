const { Schema, model} = require("mongoose")
const Usuario = require("./usuario")


const tareaSchema = Schema({
    descripcion: {
        type: String,
        required: [true, "El nombre es olbigatorio"]
    },
    completado: {
        type: Boolean,
        default: false
    },
    usuario:{
        type: String,
        required: [true, "El dueño de la tarea es obligatorio"]
    }
})


tareaSchema.methods.toJSON = function () {
    const {__v, _id, usuario ,...resto } = this.toObject()
    return resto
}


module.exports = model("Tarea", tareaSchema)