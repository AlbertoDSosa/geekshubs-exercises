// ej 8
// Crea un bucle que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

function multiplo(int, num) {
    return num % int === 0 ? true : false;
}

for(let i = 1; i <= 100; i++) {
    let multiploTres = multiplo(3, i);
    let multiploCinco = multiplo(5, i);

    if(multiploTres && multiploCinco) {
        console.log('GEEKSHUBS');
    } else if(multiploTres) {
        console.log('GEEKS');
    } else if(multiploCinco) {
        console.log('HUBS');
    } else {
        console.log(i);
    }
}
