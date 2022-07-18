// Metodo que sirve para fucionar Arrays (Inmutable) / no modifica el array original, crea uno nuevo

const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}


const rta = [...elements, ...othersElements]
const rta2 = elements.concat(othersElements)
const rta3 = [...elements, ...'random']


console.log('for ',newArray)
console.log('... ', rta)
console.log('concat ',rta2)
console.log('rta3 ',rta3)

elements.push(...othersElements);

console.log('elements',elements)