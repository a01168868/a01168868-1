const mysql=require('mysql2');

/*
const configuracion={
    host:'localhost', //Direcicón IP del servidor
    port:3306,
    usert:'root', //mysql -u root -p
    password:'Miguel.01',
    database:'test1'

}
*/

const configuracion={
    host:'52.87.253.96', //Direcicón IP del servidor
    port:3306,
    user:'user2', //mysql -u root -p
    password:'root',
    database:'mtc_cmr'

}

const conexion=mysql.createConnection(configuracion);

conexion.execute('SELECT * FROM usuario',(error,resultado,campos)=>{
    console.log("Conexión exitosa");
    console.log(resultado);
})