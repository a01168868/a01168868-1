const { aplicarRelaciones } = require('./relations')
const Sequelize = require("sequelize")

const sequelize = new Sequelize('mtc_cmr','user2','root',{
    dialect: 'mysql', //Asume port:3306
    host: '54.173.202.133',
    define:{
        timestamps:false,
        freezeTableName: true
    }
});

const modelDefiners =[
    require('../models/videojuegos'),
    require('../models/consolas'),
    require('../models/consolaVideojuego')
]

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

aplicarRelaciones(sequelize);
module.exports = sequelize