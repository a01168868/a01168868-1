const express = require("express");
const consolaController = require("../controllers/consolaController")
const router = express.Router();

router.post("/", consolaController.Create);
router.get("/:id", consolaController.GetOne);
router.get("/", consolaController.Get);
router.post("/edit/:id", consolaController.Update);
router.delete("/delete/:id", consolaController.Delete);

module.exports = router;