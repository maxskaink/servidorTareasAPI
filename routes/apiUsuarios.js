const { Router } = require("express");
const { check } = require("express-validator")

const { postUsuario, getUsuario, putUsuario, deleateUsuario, loginUsuario } = require("../controllers/apiUsuarioctr");
const { existeCorreo, existeIdUsuario } = require("../helpers/validaciones");
const validarJWT = require("../middleware/validar-jwt");
const validarCamposEntrada = require("../middleware/validarCampos");

const router = Router();


router.post("/", [
    check("nombre", "por favot ingrese un nombre").not().isEmpty(),
    check("correo", "Por favot ingrese un correo valido").isEmail(),
    check("correo").custom(existeCorreo),
    check("contraseña", "por favor ingrese una contraseña valida").isLength({ min:8 }),  
    validarCamposEntrada
] ,postUsuario)

router.post("/login", [
    check("correo", "Por favor ingresa un usuario que exista").not().custom( existeCorreo ),
    validarCamposEntrada
] , loginUsuario)

router.get("/", getUsuario)


router.put("/", [
    validarJWT,
    check("correo").custom( existeCorreo ),
    validarCamposEntrada
] , putUsuario)

router.delete("/", [
    validarJWT,
    validarCamposEntrada
] , deleateUsuario)


module.exports = router