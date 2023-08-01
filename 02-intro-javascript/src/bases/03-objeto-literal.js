const person = {
  name: "John",
  surname: "Stark",
  age: 30,
  address: {
    streetName: 'Winterfell',
    houseNumber: 17,
    city: 'Lannisport'
  },
};
console.log(person)

// Si la key es igual al value no es necesario especificar ambas partes solo dejando el nombre de la key
// console.log({person})
// console.log({person:person})
// console.log(person.name)

// Imprimir objetos
// console.table(person)

//Clonar objetos

//Error: No se hace una copia del objeto sino de la referencia a la que apunta el objeto
// Se cambio el objeto principal
const person2 = person
console.log(person2)
person2.name = "Meli";
console.log(person2)
console.log(person,'person')

// Operador spred
const person3 = {...person}
console.log(person3,'person3')
person3.address.city = "Popayork";
person3.name = "Jaleo"
console.log(person,'person')
console.log(person3 ,'person3')

// para aclarar un punto con respecto al copiado de objetos, cuando tienes varios niveles dentro de un objeto

const persona = {
  name: 'Osner',      // Nivel 1
  direccion: {        // Nivel 2
    pais: 'Colombia',
    ciudad: 'Bogota'
  }
};
// el copiado solo lo hace en el nivel 1 y el nivel 2 sigue apuntando al mismo espacio de memorio (direccion). Por lo que si yo hago esto...



const personaCopy = {...persona};
personaCopy.direccion.pais = 'Venezuela';
 
console.log(persona);
console.log(personaCopy);
// Toda la modificación que yo haga en el nivel N+1 va a ser la misma para ambos objeto.

// para evitar esto yo suelo usar

const personaCopy2 = JSON.parse(JSON.stringify(persona));

// Para hacer un copiado profundo de un objeto.
