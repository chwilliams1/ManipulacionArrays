const app = document.getElementById('app');

const products = [
    {tittle: 'burger',price : 121},
    {tittle: 'pizza',price : 20},
]

const list = products.map(product =>{
    return `<li>${product.tittle} - ${product.price} </li>`;
})

app.innerHTML = list.join('');









// const letters = ['a','b','c'];

// const newArray = letters.map(item => item +'++');
// console.log('new ' + newArray);

// /*
// const newArray =[];
// for (let index =0; index <letters.length ; index++){
//     const element = letters[index];
//     newArray.push(element + '++')
// }
// */

// console.log('original ' + letters);
// console.log('new ' + newArray);