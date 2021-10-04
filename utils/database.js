// objeto de conexión
const Sequelize = require("sequelize")
const {aplicarRelaciones} = require('./relations')
// Nombre de la base, usuario, contraseña
const sequelize = new Sequelize('mtc_cmr','user2','root',{
    dialect: 'mysql', //Asume port:3306
    host: '54.173.202.133',
    define:{
        //Evitar que ponga createdAt y updateAt
        timestamps:false,
        //Evitar plurarles
        freezeTableName: true
    }
});

//Carga de las definiciones de los modelos
const modelDefiners =[
    //Modelos definidos dentro de la carpeta models
    require('../models/videojuegos'),
    require('../models/consolas'),
    require('../models/consolaVideojuego')
]

//Adherir los modelos al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

//Realizar las relaciones entre las tabla de la BD
aplicarRelaciones(sequelize)


module.exports = sequelize