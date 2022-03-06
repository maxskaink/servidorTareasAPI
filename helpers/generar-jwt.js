const jwt = require("jsonwebtoken")



const generarJWT = (_id) => {
    return new Promise( ( resolve, reject) => {

        const payload = { _id }
        
        jwt.sign(payload, process.env.CLAVEPRIVADAJWT, { expiresIn: "4h" }, 
            (err , token) => {
                if(err) {
                    reject("No se ha podido generar el jwt")
                }else {
                    resolve(token)
                }
            }
        )



    })
}


module.exports = generarJWT