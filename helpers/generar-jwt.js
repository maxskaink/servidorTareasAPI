const jwt = require("jsonwebtoken")



const generarJWT = (uid) => {
    return new Promise( ( resolve, reject => {

        const payload = { uid }
        
        jwt.sign(payload, process.env.CLAVEPRIVADAJWT, { expiresIn: "4h" }, 
            (err , token) => {
                if(err) {
                    reject("No se ha podido generar el jwt")
                }else {
                    resolve(token)
                }
            }
        )



    }))
}


module.exports = generarJWT