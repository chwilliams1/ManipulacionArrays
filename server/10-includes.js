//Dice si un elemento esta o no dentro del array

const pets = ['cat','dog','bat'];

let includeInArray = false;
for (let index = 0; index< pets.length; index ++){
    const element = pets[index];
    if (element ==='dog'){
        includeInArray = true;
        break;
    }
};

console.log('for ', includeInArray)

//No se usa con array function
const rta2 = pets.includes('cat');
console.log('includes ', rta2)