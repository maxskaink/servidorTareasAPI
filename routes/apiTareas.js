
const { Router } = require("express");
const { check } = require("express-validator")

const { getTareas, 
        putTareas, 
        postTareas, 
        deleateTareas 
      } = require("../controllers/apiTareasctr");
const { existeID, existeDesc, existeIdUsuario } = require("../helpers/validaciones");
const validarCamposEntrada = require("../middleware/validarCampos");
const validarExistenciaTarea = require("../middleware/validarExistenciaTarea");

const validarJWT = require("../middleware/validar-jwt")

const router = Router();

router.get("/", [
  validarJWT,
  validarCamposEntrada
] ,getTareas)        

router.put("/", [
  validarJWT,
  validarExistenciaTarea,
  validarCamposEntrada
] , putTareas)        

router.post("/", [
  validarJWT,
  check("descripcion", "La descripcion es olbigatoria").not().isEmpty(),
  validarExistenciaTarea,
  validarCamposEntrada
] ,postTareas)        

router.delete("/", [
  validarJWT,
  check("descripcion", "La descripcion es olbigatoria").not().isEmpty(),
  validarCamposEntrada
] , deleateTareas)       


module.exports = router