for (let i = 0; i <10;i++){
   console.log(i);
}

let lista = [1, 4 ,5, 6, 10, 3];

for (let i = 0; i<lista.length;i++){
    console.log(lista[i]); // puedo indicar que me lo devuelva por cualquier valor
    console.log(lista[i]*3);
    console.log(lista[i]/4)
}

//for of
for (let valor of lista){ //lo mismo que arriba pero mas sintetizado
    console.log(valor)
    console.log(valor*5)
}

//foreach = es la mas efectiva
lista.forEach(valor =>{
    console.log(valor)
})

//existen for que interactuan con los valores de un objeto 

let persona = {
    nombre: 'Leandro',
    apellido: 'Villalba',
    edad: 34,
    isDeveloper: true
}

console.log(persona.nombre);

//otra forma de llamar a la propiedad de un atributo
let prop = "edad";
console.log(persona[prop])

for (let propiedad in persona){
    console.log(propiedad) //me itera los atributos de un objeto
}

