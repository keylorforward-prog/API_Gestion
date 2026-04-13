const express = require('express'); 
const router = express.Router();

const ClienteController = require('../Controller/ClienteController');

// 1. GET es para OBTENER (No usa req.body)
router.get("/", ClienteController.obtenerTodosLosClientes);

// 2. POST es para CREAR (Aquí es donde sí llega el req.body)
router.post("/", ClienteController.crearCliente);

module.exports = router;