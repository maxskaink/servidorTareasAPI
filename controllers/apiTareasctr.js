//resibe body de la peticion
const { response, request } = require("express")
const  Tarea  =require("../models/modelosDB/tareas")
const Usuario = require("../models/modelosDB/usuario")

const getTareas = async (req = request, res = response) => {

    const id = req.usuarioAutenticado._id

    const tareas = await Tarea.find({ usuario: id })

    const usuario = await  Usuario.findById( id )

    res.status(200).json({
        tareas,
        usuario
    })
}

const putTareas = async (req = request, res = response) => {

    const {completado, descripcion} = req.body

    const id = req.usuarioAutenticado._id

    const datosParaActualizar = { completado }
    
    const tarea = await Tarea.findOneAndUpdate( { descripcion, usuario: id}, datosParaActualizar)

    res.status(200).json({
        tarea,
    })
}

const postTareas = async (req = request, res = response) => {

    const { descripcion } = req.body
    const id = req.usuarioAutenticado._id

    //Crea la instacia de la tarea

    const tarea = new Tarea({ 
        descripcion,
        usuario: id
    })
    
    //Guarda la tarea en la DB

    await tarea.save()

    res.status(200).json(tarea)
}

const deleateTareas =async (req, res = response) => {
    
    const {descripcion } = req.body
    const id = req.usuarioAutenticado._id

    const tarea = await Tarea.findOneAndDelete( {usuario: id, descripcion} )

    if(!tarea) res.status(400).json({msg:"Esta tarea para este usuario no exste"})

    res.json({
        msg: `Se ha borrado la tarea ${tarea.descripcion}`,
    })
}

module.exports = {
    getTareas,
    putTareas,
    postTareas,
    deleateTareas,
}