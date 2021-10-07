const Videojuego = require('../utils/database').models.videojuego;

exports.getAgregarVideojuego = (req,res)=>{
    res.send("Formulario");
};

exports.postAgregarVideojuego = (req,res)=>{
    console.log(req.body); //<={id: number,nombre:text}
    //Esa petición la manda a otro recurso para que conteste
    Videojuego.create(req.body)
        .then(resultado=>{
            console.log("Registro Existoso");
            res.json({estado: "Aceptado"});
        })
        .catch(error=>{
            console.log("Hubo un error"+error);
            res.json({estado: "Error"});
        })
    //res.redirect("/videojuegos/confirmacionDatos");
};

exports.getConfirmacionDatos = (req,res)=>{
    res.send("Confirmacion D");
};

exports.getMostrarVideojuegos = (req,res)=>{
    res.send("Videojuegos");
};

exports.getObtenerVideojuegos = (req,res)=>{
    Videojuego.findAll()
        .then(videojuegos=>{
            console.log(videojuegos);
            res.json(videojuegos);
        })
        .catch(err=>console.log("Error"+err));
};

exports.postBorrarVideojuego=(req,res)=>{
    console.log(req.body);
    Videojuego.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("Videojuego Eliminado");
        res.json({estado: "Aceptado"});
    })
    .catch(error=>{
        console.log("Hubo un error"+error);
        res.json({estado: "Error"});
    })
} 

exports.postActualizarVideojuego=(req,res)=>{
    console.log(req.body);
    //Recibe 2 Json
    Videojuego.update({
        nombre: req.body.nombre
    },{
        where:{
            id:req.body.id
        }
    })
    .then(()=>{
        console.log("Videojuego Actualizado");
        res.json({estado: "Aceptado"});
    })
    .catch(error=>{
        console.log("Hubo un error"+error);
        res.json({estado: "Error"});
    })
} 