
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

const router = Router();

router.get("/", [
  check("id").custom( existeIdUsuario ),
  validarCamposEntrada
] ,getTareas)        

router.put("/", [
  check("id").custom( existeID ),
  check("id", "El id debe de ser valido y obligatorio").isMongoId(),
  validarExistenciaTarea,
  validarCamposEntrada
] , putTareas)        

router.post("/", [
  check("id").custom( existeIdUsuario ),
  check("descripcion", "La descripcion es olbigatoria").not().isEmpty(),
  validarExistenciaTarea,
  validarCamposEntrada
] ,postTareas)        

router.delete("/", [
  check("id", "El id es olbigatorio y debe ser valido").isMongoId(),
  check("id").custom( existeIdUsuario ),
  check("descripcion", "La descripcion es olbigatoria").not().isEmpty(),
  validarCamposEntrada
] , deleateTareas)       


module.exports = router