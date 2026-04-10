//Configuracion del Express (Lo mismo siempre)
const express = require("express");
const cors = require("cors");
const restauranteController = require("./Routes/RestauranteRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/restaurante", restauranteController);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);    
});

//10:50