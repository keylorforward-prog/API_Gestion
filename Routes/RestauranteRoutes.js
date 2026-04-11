//Se requiere el controlador 26:40 MINUTO 

const express = require('express'); 
const router = express.Router();

const RestauranteController = require('../Controller/RestauranteController');

// 1. GET es para OBTENER (No usa req.body)
router.get("/", RestauranteController.obtenerTodosLosRestaurantes);

// 2. POST es para CREAR (Aquí es donde sí llega el req.body)
router.post("/", RestauranteController.crearRestaurante);

// 3. PUT es para ACTUALIZAR (El id va en la URL, los datos en req.body)
router.put("/:id", RestauranteController.actualizarRestaurante);

// 4. DELETE es para ELIMINAR (Solo necesita el id en la URL)
router.delete("/:id", RestauranteController.eliminarRestaurante);

module.exports = router;

///:id significa que ese pedazo de la URL es una variable, 
// entonces si se hace una petición a restaurante 