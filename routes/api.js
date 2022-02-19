
const { Router } = require("express");
const { check } = require("express-validator")

const { getUsuarios, 
        putUsuarios, 
        postUsuarios, 
        deleateUsuarios 
      } = require("../controllers/apiControl");
const validarCamposEntrada = require("../middleware/validarCampos");

const router = Router();

router.get("/", getUsuarios)        

router.put("/", putUsuarios)        

router.post("/", [
  check("descripcion", "La descripcion es olbigatoria").not().isEmpty(),
  validarCamposEntrada
] ,postUsuarios)        

router.delete("/", deleateUsuarios)       


module.exports = router