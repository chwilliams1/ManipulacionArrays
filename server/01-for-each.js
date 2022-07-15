//LISTA DE TAREAS
const done = Boolean;
const app = document.getElementById('app');


const task = [
    {tittle: 'Hacer la cama',done : false},
    {tittle: 'Tomar desayuno',done : true},
    {tittle: 'Ducharme',done : false},
    {tittle: 'Ir al gimnasio',done : false},
    {tittle: 'Hacer Almuerzo',done : false},

];

task.forEach(task => {

    app.innerHTML += `<li>` + task.tittle + ' ' + `<input type="checkbox" ${task.done ? 'checked' : '' }/>` + `</li>` 
})










/*const letters = ['a','b','c'];

for (let index =0; index <letters.length ; index++){
    const element = letters[index];
    console.log('for',element);
}

letters.forEach(item => console.log('forEach', item));

*/

/* const products = [
    {tittle: 'burger',price : 121},
    {tittle: 'pizza',price : 20},
]

products.forEach(product => console.log(product.tittle, product.price));

*/

