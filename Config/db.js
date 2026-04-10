//TODA LA INFO DE LA DB

//Variables de entorno para modularizar las credenciales 
//de la base de datos y poder subir a Github el aplicativo
//.env

const mysql2 = require('mysql'); //VER

const conexion = mysql2.createConnection({
    host: 'localhost',                                     //VER LOS DATOS
    user: 'root',                                          //CAMBIAR SEGUN LA COMPU
    password: 'K14B03M05.com',                             //.env para esto porque es la contra        
    database: 'SistemaGestionQUIZ'                         //Mi DB
});
            
conexion.connect((err) =>{                                  //El connect es propio de MySql
    if (err) {
        console.log("Error al conectar a la Base de datos", err); //Se podria interpolar para que se vea mejor
        
    }else{
        console.log("Se conecto a la base de datos Correctamente"); //Agregar Emojis de Checks y asi
    }
});

module.exports = conexion;