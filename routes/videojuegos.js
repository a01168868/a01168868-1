const express = require("express");
const vjController = require("../controllers/videojuegos");
const router = express.Router();

//Establece las rutas de los recursos y cómo vamos a acceder a ellos

//Formulario de ingreso de datos (front end)
//router.get("/agregarVideojuego",vjController.getAgregarVideojuego);

//Servicios para el procesamiento de datos
router.post("/agregarVideojuego",vjController.postAgregarVideojuego);

//Página de confirmación (front end)
//router.get("/confirmacionDatos",vjController.getConfirmacionDatos);

//Ver datos guardados (se eliminó porque ya nos e va a usar)
//router.get("/mostrarVideojuegos",vjController.getMostrarVideojuegos);

//Ver datos guardados
router.get("/obtenerVideojuegos",vjController.getObtenerVideojuegos);

router.post("/borrarVideojuego",vjController.postBorrarVideojuego);
router.post("/actualizarVideojuego",vjController.postActualizarVideojuego);



//Al final:
module.exports=router;