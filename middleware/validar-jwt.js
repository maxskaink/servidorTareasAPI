const jwt = require("jsonwebtoken")
const { response, request } = require("express")
const Usuario = require("../models/modelosDB/usuario")

const validarJWT = async (req = request, res = response, next) => {
    
    const token  = req.header("token")

    if( !token ) res.status(400).json({msg: "No ha enviado ningun token"})

    try {
        
        const {_id} = jwt.verify( token, process.env.CLAVEPRIVADAJWT )

        const usuarioToken = await Usuario.findOne({ _id, estado: true})

        if (!usuarioToken) res.status(401).json({msg: "El id del usuario no existe"})

        req.usuarioAutenticado = usuarioToken

        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({msg:"token no valido "})
    }

}





module.exports = validarJWT