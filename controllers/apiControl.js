const { response, request } = require("express")
const  Tarea  =require("../models/modelosDB/tareas")

const getUsuarios = (req = request, res = response) => {
    
    res.json({
        msg: "Esta es un apeticion get"
    })
}

const putUsuarios = (req = request, res = response) => {

    res.json({
        msg: "Esta es una peticion put ",
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