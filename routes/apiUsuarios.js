const { Router } = require("express");
const { check } = require("express-validator")

const { postUsuario, getUsuario, putUsuario, deleateUsuario } = require("../controllers/apiUsuarioctr");
const { existeCorreo, existeIdUsuario } = require("../helpers/validaciones");
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


router.put("/", [
    check("id", "El id debe ser valido para mongo").isMongoId(),
    check("id").custom( existeIdUsuario ),
    check("correo").custom( existeCorreo ),
    validarCamposEntrada
] , putUsuario)

router.delete("/", [
    check("id", "El id debe de ser valido").isMongoId(),
    check("id").custom( existeIdUsuario ),
    validarCamposEntrada
] , deleateUsuario)


module.exports = router