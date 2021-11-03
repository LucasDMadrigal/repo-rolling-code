// Tarea B: Objetos

class Producto {
constructor(
    codigo,
    nombre,
    precio
){
    this.codigo = codigo,
    this.nombre = nombre,
    this.precio = precio
}

imprimeDatos(){

    console.log(`codigo de Producto: ${this.codigo}`);
    console.log(`nombre de Producto: ${this.nombre}`);
    console.log(`precio de Producto: ${this.precio}`);
}

}

const cocaCola = new Producto(
    321,
    "Coca Cola",
    180
)
const arroz = new Producto(
    754,
    "Arroz Gallo",
    250
)
const fideos = new Producto(
    254,
    "Fideos Matarazzo",
    80
)

console.log(cocaCola.imprimeDatos());
console.log(arroz.imprimeDatos());
console.log(fideos.imprimeDatos());