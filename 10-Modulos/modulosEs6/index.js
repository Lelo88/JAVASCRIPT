//import {suma, eleva, nombre} from './modulos/modulomate.js'//const sum

import * as moduloMAte from  './modulos/modulomate.js'
import getAutor, {libro} from './modulos/literatura.js'

const sum = moduloMAte.suma(4,12);

console.log(sum);

const potencia = moduloMAte.eleva(2,21)

console.log(potencia)
console.log(moduloMAte.nombre)
console.log(getAutor())
console.log(libro)