const mongoose=require('mongoose');

//mongoose.connect('mongodb://vmanager:root@3.94.165.232:27017/baseX?authSource=tecCEM')
mongoose.connect('mongodb://vmanager:tecCEM@54.173.202.133:27017/testdb?authSource=admin')
.then(()=>console.log("conexion exitosa"))
.catch(err=>console.log(err))

//Definir esquema
const PokemonSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type:String,
        required:true
    },
    numero:{
        type:Number
    },
    tipo:{
        type:String
    },
    descripcion:{
        type: String,
        required: false
    }
},{collection:'pokemon'});

//Crear modelo
const Pokemon=mongoose.model('Pokemon',PokemonSchema);

//crea una instancia del modelo
const pokemon=new Pokemon({
    nombre: "Snorlax",
    descripcion: "Está gordo y duerme mucho, como yo",
    tipo: "normal",
    numero: 5,
    _id: new mongoose.Types.ObjectId()
})

//Guarda la instancia como documento dentro de la colección 
//especificada por el modelo

//CREATE
/*pokemon.save()
    .then(()=>{
        console.log(pokemon)
        console.log("Pokemon creado")
    })
    .catch(err=>console.log(err))
    */

    //READ
    Pokemon.find()
    .then(resultado=>{
        console.log(resultado[1].nombre);
    })
    .catch()

    Pokemon.findOne()
    .then(resultado=>{
        console.log(resultado.nombre);
    })
    .catch()

    //UPDATE
    async function actualizar(){
        try{
            await Pokemon.findOneAndUpdate({nombre:"Snorlax"},{numero:666});
            let pok=await Pokemon.findOne({nombre:"Snorlax"});
            console.log(pok);
        }catch(err){
            console.log(err);
        }
    }

    actualizar();

    //DELETE  findOneAndRemove...