//Aqui van las clases / instancias

class Restaurante {                             //Las funciones no van dentro del constructor
    constructor(nombre, ubicacion, menu) {      //Aqui solo el objeto la carcasa
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.menu = menu;
        this.abierto = false;                   //Con funciones cambia si esta abierto
    }                                           //No se van hacer instancias porque van en el controlador
}                                               //En la db tiene q ser el mismo nombre de la clase
module.exports = Restaurante;                   //Se esta haciendo un API puro sin ORM
    