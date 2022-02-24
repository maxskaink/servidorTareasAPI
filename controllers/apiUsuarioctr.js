const { response, request } = require("express")
const Usuario = require("../models/modelosDB/usuario")
const bcryptjs = require("bcryptjs")


 const postUsuario = async (req = request, res = response) => {
    
    const  { nombre, correo, contraseña, } = req.body

    //ENcriptar contraseña

    const salt = bcryptjs.genSaltSync()
    const contraseñaSegura =  bcryptjs.hashSync( contraseña, salt)

    //Generar usuario y guardarlo

    const usuario = new Usuario({ nombre, correo, contraseña:contraseñaSegura})

    await usuario.save()

    res.json(
        usuario
    )


 }


 const getUsuario = async ( req = request, res = response) => {
     
    const [usuarios, cantidadUsuarios] = await Promise.all([
        Usuario.find({ estado: true}),
        Usuario.countDocuments({ estado:true })
    ])



    res.json( {
        cantidadUsuarios,
        usuarios
    })
 }





 module.exports = {
     postUsuario,
     getUsuario,
 }