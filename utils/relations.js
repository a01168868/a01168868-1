function aplicarRelaciones(sequelize){
    const Videojuego = sequelize.models.videojuego
    const Consola = sequelize.models.consola
    const ConsolaVideojuego = sequelize.models.consolaVideojuego

    Videojuego.belongsToMany(Consola,{through:ConsolaVideojuego});
    Consola.belongsToMany(Videojuego,{through:ConsolaVideojuego});
}

module.exports = { aplicarRelaciones }