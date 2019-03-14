
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
];

var str = '';
for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < 3; j++) {
        matriz[i].push(str + i.toString() + j.toString()); 
    }
}

console.log(matriz);
