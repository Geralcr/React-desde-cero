import { heroes, owners } from './../data/heroes';

// find entrega un solo valor
const getHeroeById = (id) => heroes.find((heroe)=> heroe.id === id );

console.log(getHeroeById(2));

// filter entrega un array
const getHeroesByOwner = (owner) => heroes.filter((heroe)=> heroe.owner === owner );

console.table(getHeroesByOwner('DC'))

console.log(owners)
