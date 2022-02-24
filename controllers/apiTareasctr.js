const { response, request } = require("express")
const  Tarea  =require("../models/modelosDB/tareas")
const Usuario = require("../models/modelosDB/usuario")

const getTareas = async (req = request, res = response) => {

    const tareas = await Tarea.find()

    res.json({
        tareas,
        msg: "Esta es un apeticion get"
    })
}

const putTareas = async (req = request, res = response) => {

    const { id} = req.query
    const {completado, descripcion } = req.body

    const datosParaActualizar = {
        completado,
        descripcion
    }
    const tarea = await Tarea.findByIdAndUpdate( id, datosParaActualizar)

    res.json({
        tarea,
    })
}

const postTareas = async (req = request, res = response) => {

    //resibe body de la peticion
    const { descripcion, id } = req.body


    const usuario =  Usuario.findById( id )

    if(!usuario) return res.status(400).json({msg: "El usuario no existe"})

    //Crea la instacia de la tarea

    const tarea = new Tarea({ 
        descripcion,
        usuario: usuario._id
    })

    
    //Guarda la tarea en la DB
    
    await tarea.save()

    res.json(tarea)
}

const deleateTareas =async (req, res = response) => {
    
    const { id } = req.query

    const tarea = await Tarea.findByIdAndDelete( id )

    res.json({
        id,
        msg: `Se ha borrado la tarea ${tarea.descripcion}`,
    })
}

module.exports = {
    getTareas,
    putTareas,
    postTareas,
    deleateTareas,
}