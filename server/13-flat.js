// Manipulacion de arrays dentro de otro array

const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function aplanar(list){
    let newList = [];
    for (element of list){
        if(Array.isArray(element)){
            newList = newList.concat(aplanar(element));
        }else{
            newList.push(element);
        }
    }
    return newList;
}
console.log(aplanar(matriz))






const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
}}

console.log('for',newArray)

const rta2 = matriz.flat(3);
console.log(rta2)

