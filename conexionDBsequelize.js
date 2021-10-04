const Sequelize=require('sequelize');
//p1=Nombre de la base de datos CREATE DATABASE base2,
//p2=usuario, p3=password
const sequelize = new Sequelize('mtc_cmr','user2','root',{
    dialect: 'mysql', //Asume port:3306
    host: '52.87.253.96',
    define:{
        //Evitar que ponga createdAt y updateAt
        timestamps:false,
        //Evitar plurarles
        freezeTableName: true
    }
});

//MODELO
const Usuario=sequelize.define('usuario',{
    usuario: {
        type : Sequelize.STRING(30),
        allowNull : false,
        primaryKey : true
    },
    password: {
        type: Sequelize.STRING(15),
        allowNull: false
    }
});

//Generar sincronización para poder cargar la información
//de los modelos que se programaron
// Todo esto se corre asíncrono, para garantizar la secuencia de
// ejecución hay que ir anidando los .then()
sequelize.sync()
    .then(resultado=>{
        console.log("Conexión exitosa");
        //CRUD

        //CREATE
        Usuario.create({
            usuario:"Prueba22",
            password:"123456"
        })
        .then(resultado=>{
            console.log("Registro agregado");
        })
        .catch(error=>{ console.log("Usuario Existente"+error); });

        //SELECT * FROM usuario
        Usuario.findAll()
            .then(resultado=>{
                console.log("Usuarios: ",resultado)
            })
            .catch(error=>{ console.log("Hubo un error "+error); });

        //READ 2 SELECT <fields> FROM <modelo> WHERE <conditions>

        sequelize.query("SELECT usuario FROM usuario WHERE usuario='Prueba22'",
            {type:Sequelize.QueryTypes.SELECT})
            .then(usuario=>{
                console.log(usuario);
            })
            .catch(error=>console.log(error));

        // DELETE
        Usuario.destroy({
            where:{
                usuario:"Prueba22"
            }
        })
        .then(res=>console.log("Registro Eliminado"))
        .cath(error=>console.log("Error al eliminar usuario"+error));
    })
    .catch(error=>{ console.log(error); });