const { Schema, model} = require("mongoose")


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
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    }
})



module.exports = model("Tarea", tareaSchema)