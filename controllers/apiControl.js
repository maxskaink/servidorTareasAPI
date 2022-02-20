const { response, request } = require("express")
const  Tarea  =require("../models/modelosDB/tareas")

const getUsuarios = async (req = request, res = response) => {

    const tareas = await Tarea.find()

    res.json({
        tareas,
        msg: "Esta es un apeticion get"
    })
}

const putUsuarios = async (req = request, res = response) => {

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

const postUsuarios = async (req = request, res = response) => {

    //resibe body de la peticion
    const { descripcion } = req.body

    //Crea la instacia de la tarea

    const tarea = new Tarea({ descripcion })
    
    //Guarda la tarea en la DB

    await tarea.save()
    
    res.json(descripcion)
}

const deleateUsuarios =async (req, res = response) => {
    
    const { id } = req.query

    const tarea = await Tarea.findByIdAndDelete( id )

    res.json({
        id,
        msg: `Se ha borrado la tarea ${tarea.descripcion}`,
    })
}

module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleateUsuarios,
}