
const { Router } = require("express");
const { check } = require("express-validator")

const { getTareas, 
        putTareas, 
        postTareas, 
        deleateTareas 
      } = require("../controllers/apiTareasctr");
const { existeID, existeDesc } = require("../helpers/validaciones");
const validarCamposEntrada = require("../middleware/validarCampos");

const router = Router();

router.get("/", getTareas)        

router.put("/", [
  check("id", "El id debe de ser valido y obligatorio").isMongoId(),
  check("id").custom( existeID ),
  check("descripcion").custom( existeDesc ),
  validarCamposEntrada
] , putTareas)        

router.post("/", [
  check("descripcion", "La descripcion es olbigatoria").not().isEmpty(),
  check("descripcion").custom( existeDesc ),
  validarCamposEntrada
] ,postTareas)        

router.delete("/", [
  check("id", "El id es olbigatorio y debe ser valido").isMongoId(),
  check("id").custom( existeID ),
  validarCamposEntrada
] , deleateTareas)       


module.exports = router