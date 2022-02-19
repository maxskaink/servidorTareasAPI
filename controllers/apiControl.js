const { response, request } = require("express")


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

const postUsuarios = (req = request, res = response) => {

    res.json({
        msg: "Esta es una peticion post",
    })
}

const deleateUsuarios =(req, res = response) => {
    res.json({
        msg: "Esta es una peticion deleate uwu",
    })
}

module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleateUsuarios,
}