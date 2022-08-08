// break y continue
// labels

let unidades = 0
let decenas = 0

bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El número actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades === 10) {
            unidades = 0
            break bucleUnidades //le decimos que afecte al bucle de unidades
        }
        if (decenas === 2) {
            break bucleDecenas //le decimos que afecte al bucle de decenas
        }
    }
    decenas++
}
console.log("Ya hemos terminado")