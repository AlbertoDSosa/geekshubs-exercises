// ej 7
// crea un array con la gente que su nombre
// empieza por J y sean menores de 40 años
// utilizando el método filter de los arrays
// y muéstralo por consola.


let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]

let gentes = gente.filter(function (item) {
    return item.nombre[0] == 'J' && item.edad < 40;
});

console.log(gentes);