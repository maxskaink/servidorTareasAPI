const Tarea = require("../models/modelosDB/tareas")
const Usuario = require("../models/modelosDB/usuario")

const existeID = async (id ) => {

    const tarea = await Tarea.findById( id )

    if (!tarea ) throw new Error("El id no existe en la DB")

}

const existeDesc = async ( descripcion ) => {

    req

    const tarea = await Tarea.findOne( {descripcion })

    if(tarea) throw new Error("La tarea ya esta en la DB")
}

const existeCorreo = async( correo ) => {
    const usuario = await Usuario.findOne( { correo } )
    if(usuario) throw new Error("El correo ya existe")
}

const existeIdUsuario = async( id ) => {
    const usuario =  await Usuario.findOne( {_id :id , estado:true} )
    //console.log(usuario)
    if(!usuario) throw new Error("El usuario no existe")
}

module.exports = {
    existeID,
    existeDesc,
    existeCorreo,
    existeIdUsuario
}