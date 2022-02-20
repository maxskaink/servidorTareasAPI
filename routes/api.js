
const { Router } = require("express");
const { check } = require("express-validator")

const { getUsuarios, 
        putUsuarios, 
        postUsuarios, 
        deleateUsuarios 
      } = require("../controllers/apiControl");
const { existeID, existeDesc } = require("../helpers/validaciones");
const validarCamposEntrada = require("../middleware/validarCampos");

const router = Router();

router.get("/", getUsuarios)        

router.put("/", putUsuarios)        

router.post("/", [
  check("descripcion", "La descripcion es olbigatoria").not().isEmpty(),
  check("descripcion").custom( existeDesc ),
  validarCamposEntrada
] ,postUsuarios)        

router.delete("/", [
  check("id", "El id es olbigatorio y debe ser valido").isMongoId(),
  check("id").custom( existeID ),
  validarCamposEntrada
] , deleateUsuarios)       


module.exports = router