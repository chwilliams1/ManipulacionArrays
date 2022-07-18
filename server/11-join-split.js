//Join nos sirve para modificar todo nuestro Array

const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
};

console.log(rtaFinal);


rta2 = elements.join("--");
console.log(rta2)

const tittle = 'Curso de manipulacion de Arrays'

const rta3 = tittle.split(' ');

console.log(rta3)

const rta4 = rta3.join('-').toLowerCase()
console.log(rta4)



const solution =([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
]);


const sol = solution.flatMap(item => item.split(' '))

console.log(sol)