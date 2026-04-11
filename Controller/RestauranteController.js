//Lo que se va controlar ua tabla de la DB
//Necesita la bd para saber donde va guardar 

const conexion = require('../Config/db'); //La configuracion (Db) 
const Restaurante = require ('../Models/Restaurante'); //Ahora el modelo 

exports.obtenerTodosLosRestaurantes = (req, res) => {    //GET                                  //Por ahora no es con un ORM 
    conexion.query("SELECT * FROM Restaurante;", (err, results) => {                            // Query es una peticion a la bd
        if (err) {
            console.log(err);
            return res.status(500).json({error: 'Error al obtener los restaurantes'});          //Return al front-end
        }
        res.json(results);
    });
}                                                                                        

exports.crearRestaurante = (req, res) => {                //POST                                          
    const {nombre, ubicacion, menu} = req.body;
    const nuevoRestaurante = new Restaurante(nombre, ubicacion, menu);                          //el abierto es boolean, el ya sabe defecto false
    const sql = "INSERT INTO Restaurante (nombre, ubicacion, menu, abierto) VALUES (?, ?, ?, ?)";

    conexion.query(sql, [nuevoRestaurante.nombre, 
        nuevoRestaurante.ubicacion, 
        nuevoRestaurante.menu, 
        nuevoRestaurante.abierto
        ], (err, result) => {if (err){
            console.log(err);
            return res.status(500).json({error: 'Error al crar el Restaurante'});  
        }
     res.status(201).json({message: 'Restaurante creado correctamente', restauranteId: result.insertId})
    });
};

//req.body 

exports.actualizarRestaurante = (req, res) => {    //PUT
    const { id } = req.params;
    const { nombre, ubicacion, menu, abierto } = req.body;
    const sql = "UPDATE Restaurante SET nombre = ?, ubicacion = ?, menu = ?, abierto = ? WHERE id = ?";

    conexion.query(sql, [nombre, ubicacion, menu, abierto, id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Error al actualizar el Restaurante' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Restaurante no encontrado' });
        }
        res.json({ message: 'Restaurante actualizado correctamente' });
    });
};

exports.eliminarRestaurante = (req, res) => {    //DELETE
    const { id } = req.params;
    const sql = "DELETE FROM Restaurante WHERE id = ?";

    conexion.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Error al eliminar el Restaurante' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Restaurante no encontrado' });
        }
        res.json({ message: 'Restaurante eliminado correctamente' });
    });
};