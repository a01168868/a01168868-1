const express = require('express');
const path = require('path');  // Windows \ MAC o Linux /
const vjRoutes = require("./routes/videojuegos");
const consoleRoutes = require("./routes/consolaRoutes");
const detalleConsolaVideojuego = require("./routes/detalleVCRoutes");
const sequelize = require('./utils/database')
const app = express();

app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/videojuegos", vjRoutes);
app.use("/console", consoleRoutes);
app.use("/vc", detalleConsolaVideojuego);

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

sequelize.sync()
    .then(
        app.listen(8081, () => {
            console.log("Servidor online en el puerto 8081")
        })
    )
    .catch(err => console.log(err))