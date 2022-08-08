//Igualdad

if (5==5){
   
}

if (5===5){

}

let a = 5;
let b = 5;

if(a==b){ //compara solo valores
    console.log("a es igual a b -- debil");
}

if(a==b){ // compara valor y tipo
    console.log("a es igual a b -- fuerte");
} 

let c = 4;
let d = '4';

if (c!=d){
    console.log("c es diferente a d -- debil");
}

if (c!==d){
    console.log("c es diferente a d -- Fuerte");
}