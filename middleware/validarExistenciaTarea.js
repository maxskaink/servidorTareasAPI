const Usuario = require("../models/modelosDB/usuario")
const Tarea = require("../models/modelosDB/tareas") 



const validarExistenciaTarea = async (req, res, next) => {
    
    const { id, descripcion } = req.body

    const tarea = await Tarea.findOne({ usuario: id, descripcion})
    //console.log(tarea)

    if(!tarea) next()

    if(tarea) res.status(400).json({msg: "Esta tarea ya existe para este usuario"})

}



module.exports = validarExistenciaTarea