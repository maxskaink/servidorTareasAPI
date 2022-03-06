const { response, request } = require("express")
const Usuario = require("../models/modelosDB/usuario")
const Tarea = require("../models/modelosDB/tareas")
const bcryptjs = require("bcryptjs")
const generarJWT = require("../helpers/generar-jwt")


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

const putUsuario = async ( req = request, res = response) => {
    
    const { nombre, correo, contraseña } = req.body

    const id = req.usuarioAutenticado._id

    //valida si exsite la contrasñea

    let contraseñaSegura

    if ( contraseña ) {

        const salt = bcryptjs.genSaltSync()
        contraseñaSegura =  bcryptjs.hashSync( contraseña, salt)

    }
    // Reune los datos para actualizar
    const datosActulizar = {}
    
    if( nombre ) datosActulizar.nombre = nombre
    if( correo ) datosActulizar.correo = correo
    if( contraseña) datosActulizar.contraseña = contraseñaSegura 
    
    //Actualizar usuario
    const usuario = await Usuario.findByIdAndUpdate(id, datosActulizar)

    res.status(200).json({
        msg: "El usuario se a actuliazado con exito",
        usuario
    })
}

const deleateUsuario = async(req= request, res = response) => { 

    const id = req.usuarioAutenticado

    const usuario = await Usuario.findByIdAndUpdate( id , { estado: false})

    const tareas = await Tarea.find( { usuario: usuario.id } )

//    console.log( tareas )

    tareas.forEach( async (tarea) => {
        await Tarea.findByIdAndRemove(tarea._id)
   })

    res.status(200).json({
        msg: `El usuario ${ usuario.nombre } ha sido borrado con exito`,
        usuario
    })
}

const loginUsuario = async (req= request, res = response) => {

    const { correo, contraseña } = req.body

    try {
        
        const usuario = await Usuario.findOne({ correo })

        //Verificaar contraseña

        const validacionContraseña = bcryptjs.compareSync(contraseña, usuario.contraseña)

        if (!validacionContraseña) res.status(400).json({msg: "El usuario o la contraseña no son validos"})

        
        const jwtUsuario = await generarJWT( usuario._id )

        res.status(200).json({
            msg:"TOdo ok",
            jwtUsuario        
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Ha ocurrido un error por favor comuniquese con el administrador"})
    }

}

 module.exports = {
     postUsuario,
     getUsuario,
     putUsuario,
     deleateUsuario,
     loginUsuario
}