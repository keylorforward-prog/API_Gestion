//Se requiere el controlador 26:40 MINUTO 

const express = require('express'); 
const router = express.Router();

const RestauranteController = require('../Controller/RestauranteController');

//Ruta para obtener los restaurantes
router.get("/", RestauranteController.crearRestaurante);         //FALTA el get o segun
router.post("/", RestauranteController.obtenerTodosLosRestaurantes);         //


module.exports = router;