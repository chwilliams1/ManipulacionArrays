const orders = [
    {
        customerName:"Nicolas",
        total:60,
        delivered:true,
    },
    {
        customerName:"Zulema"
    ,total:120,
    delivered:false,
    },
    {
    customerName:"Santiago",
    total:180,
    delivered:true,
    },
    {
    customerName:"Nicolas2",
    total:240,
    delivered:false,
},
];

rta2 = orders.filter(item => item.delivered && item.total >= 200)
console.log(rta2)

const search = (query)=> {
    return orders.filter(item =>{
        return item.customerName.includes(query);
    })
}

console.log(search('adsgasgasgasg'))




// const words = [ 'spray','limit', 'elite', 'exuberant'];

// const newArray =[];

// // Utilizando for para buscar palabras sobra 6 letras
// for (let index =0; index <words.length ; index++){
//     const item = words[index];
//     if (item.length >= 6){
//         newArray.push(item);
//     }
// }

// // Utilizando filter para buscar palabras sobra 6 letras
// const rta = words.filter(item => item.length >= 6)


// console.log('newArray', newArray)
// console.log('original', words)
// console.log('rta', rta)