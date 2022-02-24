const { Router } = require("express");
const { check } = require("express-validator")

const { postUsuario, getUsuario } = require("../controllers/apiUsuarioctr");
const { existeCorreo } = require("../helpers/validaciones");
const validarCamposEntrada = require("../middleware/validarCampos");

const router = Router();


router.post("/", [
    check("nombre", "por favot ingrese un nombre").not().isEmpty(),
    check("correo", "Por favot ingrese un correo valido").isEmail(),
    check("correo").custom(existeCorreo),
    check("contraseña", "por favor ingrese una contraseña valida").isLength({ min:8 }),  
    validarCamposEntrada
] ,postUsuario)

router.get("/", getUsuario)



module.exports = router