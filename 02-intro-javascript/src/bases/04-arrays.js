// Arreglos js
// No son recomendado a menos que sea algo fijo inicial
const arrayJade = new Array(100);
arrayJade.push(1)
console.log(arrayJade)

// Mejor sintaxis
const arrayJade2 = [];

// No se recomienda para insertar info a un array mejor el operador spred
arrayJade2.push(1);
arrayJade2.push(2);
arrayJade2.push(3);
arrayJade2.push(4);
arrayJade2.push(5);
console.log(arrayJade2);

// Error de copia adicion de un item
let arrayJade3 = arrayJade2;
arrayJade3.push(6);

console.log(arrayJade2)
console.log(arrayJade3)

// Usando spred
let arrayJade4 = [...arrayJade2,5];
console.log(arrayJade4);
let arrayJade5 = arrayJade4.map((x)=> x*2)
console.log(arrayJade5)
