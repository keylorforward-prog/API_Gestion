//Configuracion del Express (Lo mismo siempre)
const express = require("express");
const cors = require("cors");
const restauranteController = require("./Routes/RestauranteRoutes");
const clienteController = require("./Routes/ClienteRoute")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/restaurante", restauranteController); //La URL a Postman etc
app.use("/api/cliente", clienteController) //Cliente

const PORT = 3000;

app.listen(PORT, () => {
    console.log(" Servidor corriendo en puerto " + PORT);    
});

//10:50