const conexion = require('../Config/db'); //La configuracion (Db) 
const Cliente = require ('../Models/Cliente'); //Ahora el modelo 

exports.obtenerTodosLosClientes = (req, res) => {    //GET                                  //Por ahora no es con un ORM 
    conexion.query("SELECT * FROM Cliente;", (err, results) => {                            // Query es una peticion a la bd
        if (err) {
            console.log(err);
            return res.status(500).json({error: 'Error al obtener los clientes'});          //Return al front-end
        }
        res.json(results);
    });
}    

exports.crearCliente = (req, res) => {                //POST                                          
    const {nombre, telefono, cedula, correo} = req.body;
    const nuevoCliente = new Cliente(nombre, telefono, cedula, correo);                          //el abierto es boolean, el ya sabe defecto false
    const sql = "INSERT INTO Cliente (nombre, telefono, cedula, correo, activo) VALUES (?, ?, ?, ?, ?)";

    conexion.query(sql, [
        nuevoCliente.nombre, 
        nuevoCliente.telefono,
        nuevoCliente.cedula,
        nuevoCliente.correo,
        nuevoCliente.activo
        ], (err, result) => {if (err){
            console.log(err);
            return res.status(500).json({error: 'Error al crear el Cliente'});  
        }
     res.status(201).json({message: 'Cliente creado correctamente', clienteId: result.insertId})
    });
};
