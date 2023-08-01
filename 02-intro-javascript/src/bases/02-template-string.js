const firstName = 'Jade';
const surname = 'Claros'
const fullname = firstName + ' ' + surname;
const templateFullname = `${firstName} ${surname}`
console.log(fullname);
console.log(templateFullname);

const getGreeting = (name) => {
  return  'Holis ' + name;
}
console.log(`Este es un texto: ${ getGreeting(firstName) }`)
