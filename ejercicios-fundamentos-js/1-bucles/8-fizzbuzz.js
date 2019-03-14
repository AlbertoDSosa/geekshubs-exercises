// ej 8
// Crea un bucle que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

function multiplo(int, num) {
    var rest = num % int;
    if(rest == 0) {
        return true;
    } else {
        return false;
    }  
}

for(let i = 1; i <= 100; i++) {
    if(multiplo(3, i) && multiplo(5, i)) {
        console.log('GEEKSHUBS');
    } else if(multiplo(3, i)) {
        console.log('GEEKS');
    } else if(multiplo(5, i)) {
        console.log('HUBS');
    } else {
        console.log(i);
    }
}
