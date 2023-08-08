const returnArray = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = returnArray();
console.log(letras, numeros);

// Tarea
// 1. primer array se llamara name
// 2. se llama setName

const useState = (valor) => {
    return [ valor, ()=>{console.log(`Holis ${valor}`)}];
}
// eslint-disable-next-line react-hooks/rules-of-hooks
const [nameG ,setName] =useState("Juan");
console.log(nameG);
setName('Pedro');

