// Funciones flecha
const saludar = (name)=>{
    return `Hola, ${name}`;
}
console.log(saludar('jade'))

const saludar2  = function (name){
    return `Hola, ${name}`;
}
console.log(saludar2('jade'))

// Simplificar
const saludar3 = (name)=>`Hola, ${name}`;
console.log(saludar3('jade'))

const saludar4 = ()=>(`Hola, mundo`);
console.log(saludar4())

// Homework
// Funcion flecha
// objeto implícito
const getSaludar = (nombre) => ({
    nombre,
    edad:'23'

});
console.log(getSaludar('jade'));
