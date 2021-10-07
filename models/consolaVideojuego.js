const Sequelize = require('sequelize');
const ConsolaVideojuego = (sequelize)=>{
    sequelize.define('consolaVideojuego',{
        idCV:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true 
        },
        lanzamiento: Sequelize.STRING,
        videojuegoId: Sequelize.INTEGER,
        consolaId: Sequelize.INTEGER
    })
}
module.exports= ConsolaVideojuego