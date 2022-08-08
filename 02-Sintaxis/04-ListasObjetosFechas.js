//listas

const lista = [1, "hola", true, undefined, null]

const lista2 = new Array(1, "hola", true, undefined, null);

console.log(lista)
console.log(lista2)

const lista3 = new Array(3)

console.log(lista3)

const lista4 =[lista,lista2,lista3]

console.log(lista4)

//objetos = representaciones de datos de objetos de la vida real    

const movil = {
   altura: 10, //atributo
   anchura: 5,
   marca: "Xiaomi", 
   isWhite: false,
   contactos: ["Leandro","Luna"],
   tarjeta: { //un objeto puede ser atributo de un objeto en si
    marca: "Scandisk",
    almacenamiento: 32
   }
}

console.log(movil.marca)

//fechas

const ahora = new Date()

console.log(ahora)

const fechaCadena = new Date("July 30 1988") //notacion con cadena
console.log(fechaCadena)

const fechaValores = new Date(1988, 6, 30) //en este tipo de notacion los meses se encuentran como en un array
console.log(fechaValores)

const dia = ahora.getDay();
const mes = ahora.getMonth() + 1;
const anio = ahora.getFullYear();

console.log(dia, mes, anio)