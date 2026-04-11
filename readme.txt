https://github.com/keylorforward-prog/API_Gestion.git
https://github.com/keylorforward-prog/API_Gestion

node app.js LEVANTAR BACKEND

ESTRUCTURA: 

Restaurante
 ├── nombre
 ├── ubicación
 ├── menu : Menu
 ├── pedidos : Pedido[]
 └── métodos: abrir(), cerrar()

Cliente
 ├── id
 ├── nombre
 └── métodos: hacerPedido()

Menu
 ├── platos : Plato[]
 └── métodos: mostrarMenu()

Plato
 ├── id
 ├── nombre
 ├── precio
 └── categoría

Pedido
 ├── id
 ├── cliente : Cliente
 ├── platos : Plato[]
 ├── total
 └── métodos: calcularTotal()

Factura
 ├── id
 ├── pedido : Pedido
 ├── total
 └── métodos: generarFactura()

--------------------------------------
git init

git add .

git commit -m "Primer commit"

git branch -m main

git remote add origin  (y la URL)

git push -u origin main
--------------------------------------