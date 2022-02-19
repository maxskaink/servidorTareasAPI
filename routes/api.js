
const { Router } = require("express");
const { getUsuarios, 
        putUsuarios, 
        postUsuarios, 
        deleateUsuarios 
      } = require("../controllers/apiControl");

const router = Router();

router.get("/", getUsuarios)        

router.put("/", putUsuarios)        

router.post("/", postUsuarios)        

router.delete("/", deleateUsuarios)       


module.exports = router