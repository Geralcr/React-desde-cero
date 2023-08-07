// Desestructuración
// Asignacion desestructurante
const persona = {
    nombre: 'Juan',
    apellidos: 'Perez',
    edad: 12
};


let nombre1 = persona.nombre;
console.log(nombre1,'nombre1');

let { nombre } = persona
console.log(nombre, 'nombre');

let { nombre:nombre2, edad:edad1 } = persona
console.log(nombre2,'nombre2');
console.log(edad1);

console.log(persona.apellidos);
console.log(persona.edad);

// Para parametros
const imprimePersona = ( persona ) => {
    let { nombre:nombre2, edad:edad1 } = persona

    console.log(nombre2,edad1)

}
imprimePersona(persona)


// desestructuracion en el argumento de la funcion
const imprimePersona2 = ( { nombre:nombre2, edad:edad1, apellidos, clave = 123 } ) => {

    console.log(nombre2, edad1, apellidos, clave);


}

imprimePersona2(persona)



const useContext1 = ( { nombre, edad, apellidos, clave = 123 } ) => {

    return {
        nombreClave:nombre,
        anios: edad,
        latlng:{
            lat:12.34,
            lng:-56.7890
        }
    }
    
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave, anios, latlng: { lat, lng }} = useContext1(persona)
console.log(nombreClave, anios, lat, lng)

