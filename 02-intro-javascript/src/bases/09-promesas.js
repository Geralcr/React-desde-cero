
import { getHeroeById, getHeroesByOwner } from "./bases/08-import";

const getHeroesByIdAsync = ( id ) => {

    const promesa = new Promise((resolve, reject) =>{
        setTimeout(() => {
            // resolve();
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe)
            }else{
                reject('no se pudo resolver');
            }
        }, 2000)
    })
    return promesa;
}

getHeroesByIdAsync(10)
.then(( heroe )=>{
    console.log('se ejecuta cuando se resuelve la promesa',heroe);
})
.catch((err) => (console.warn( err,'error')));

const test= ({ name })=>{
    console.log(`Heroe: ${name}`)
}

getHeroesByIdAsync(1)
.then(test)
.catch(console.warn);

