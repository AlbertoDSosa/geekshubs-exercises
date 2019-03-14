// ej 2
// haz un bucle que muestre por consola los impares del 3 al 17 inclusive
// Utilizad el bucle for

// Sin recorrer 3 y el 17
// for(var i = 4; i <= 16; i += 2) {
//    console.log(i);
// }

// Recorriendo el 3 y el 17
for(let i = 3; i <= 17; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}
