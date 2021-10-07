const express = require("express");
const consolaController = require("../controllers/consolaController")
const router = express.Router();

// Console 

// Create
// One
router.post("/", consolaController.Create);
// Multiple

// Read
router.get("/:id", consolaController.GetOne);
router.get("/", consolaController.Get);
// Update
router.post("/edit/:id", consolaController.Update);
// Delete
router.delete("/delete/:id", consolaController.Delete);

//Al final:
module.exports = router;