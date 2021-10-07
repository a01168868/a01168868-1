const express = require("express");
const consolaVideojuegoController = require("../controllers/detalleVC.Controller");
const router = express.Router();

router.get("/", consolaVideojuegoController.Get);
router.get("/:id", consolaVideojuegoController.GetOne);
router.post("/", consolaVideojuegoController.Create);
router.post("/edit/:id", consolaVideojuegoController.Update);
router.delete("/delete/:id", consolaVideojuegoController.Delete);

module.exports = router;