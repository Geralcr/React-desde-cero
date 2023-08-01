console.log('Hola');

// Variables y Constantes

const name = 'Jade';
let surname = 'Claros';
// Error: no se puede reasignar una constante
// name ='John Doe'; 

let dado = 2;
// Error: no se debe redeclarar
// let dado = 4;
console.log(dado);
dado = 4
console.log(dado)

//Variables de scope

if (true) {
  let dado = 10;
  console.log(dado);
}

