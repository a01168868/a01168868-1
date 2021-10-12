const mongoose=require('mongoose');

//mongoose.connect('mongodb://vmanager:root@3.94.165.232:27017/baseX?authSource=tecCEM')
mongoose.connect('mongodb://vmanager:root@54.173.202.133:27017/testdb?authSource=tecCEM')
.then(()=>console.log("conexion exitosa"))
.catch(err=>console.log(err))

//Definir esquema
const PokemonSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type: String,
        required: false
    }
})

//Crear modelo
const Pokemon=mongoose.model('Pokemon',PokemonSchema);

//crea una instancia del modelo
const pokemon=new Pokemon({
    nombre: "Charizard",
    descripcion: "Pokemon superMegaPoderoso de fuego",
    _id: new mongoose.Types.ObjectId()
})

//Guarda la instancia como documento dentro de la colección 
//especificada por el modelo
pokemon.save()
    .then(()=>{
        console.log(pokemon)
        console.log("Pokemon creado")
    })
    .catch(err=>console.log(err))