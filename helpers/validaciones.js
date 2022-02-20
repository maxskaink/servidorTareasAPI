const Tarea = require("../models/modelosDB/tareas")

const existeID = async (id ) => {

    const tarea = await Tarea.findById( id )

    if (!tarea ) throw new Error("El id no existe en la DB")

}

const existeDesc = async ( descripcion ) => {

    const tarea = await Tarea.findOne( {descripcion })

    if(tarea) throw new Error("La tarea ya esta en la DB")
}



module.exports = {
    existeID,
    existeDesc
}