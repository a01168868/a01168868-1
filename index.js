const express = require('express');
const path = require('path');  // Windows \ MAC o Linux /
const sequelize = require('./utils/database')
const vjRoutes = require("./routes/videojuegos");
const consoleRoutes = require("./routes/consolaRoutes");
const app = express();

app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use("/videojuegos", vjRoutes);
app.use("/console", consoleRoutes);

app.get('/practica1', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/formulario', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'form.html'));
});

app.get('/prueba', (request, response) => {
    response.send("<h1>Esto es una prueba :D</h1>");
});

app.get('/informacion', (req, res) => {
    res.send("<h1>Recibiendo información</h1>");
    console.log(req.query);
    console.log(req.query.correo);
});

app.get('/datos/:identificador/:nombre', (req, res) => {
    res.send("<h1>Recibiendo Datos</h1>");
    console.log(req.params);
    console.log(req.params.nombre);
});

app.post('/pruebaJson/:producto', (req, res) => {
    res.send("<h1>Datos en el servidor</h1>");
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    console.log(req.body.nombreDesarrollador);
    console.log("Nombre de Desarrollador: " + req.body.nombreDesarrollador);
    console.log(` ${req.body.nombreDesarrollador} es el mejor :D`);
    console.log(req.body.operacion);
});



app.get('/plantillaEJS', (req, res) => {
    const datos = [
        { usuario: "Miguel", password: "prueba2" },
        { usuario: "Susanita", password: "teniaunraton" },
        { usuario: "Lorena", password: "ychabela" }

    ];

    res.render('plantilla.html', {
        personas: datos,
        nombre: "Miguel",
        correo: "mtc590@hotmail.com"
    });
});


app.get('/escuchaForm', (req, res) => {
    console.log(req.query);
    const datos = {
        'nombre': req.query.nombre,
        'contraseña': req.query.password,
        'correo': req.query.correo,
        'carrera': req.query.carrera,
        'fecha': req.query.fecha,
        'telefono': req.query.telefono,
        'boletin': req.query.boletin
    };
    res.render('escuchaForm.html', {
        usuario: datos
    });
});





//sequelize.sync({force:true})
sequelize.sync()
    .then(
        app.listen(8080, () => {
            console.log("Servidor online en el puerto 8080")
        })
    )
    .catch(err => console.log(err))