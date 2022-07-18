// Modifica el array original, apoyandose con un segundo array inmutable

const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id ==='🍔');

if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    products.splice(productIndex,1,)
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


const products2 = products.filter(item => item.id ==='🥞')
console.log(products2)

  // Update

const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
}   }


// //Update de un Array
// const produc2tIndex = productsV2.findIndex(item => item.id ===update.id);
// productsV2[produc2tIndex] = {
//     ...productsV2[produc2tIndex],
//     ...update.changes
// }

// console.log(productsV2);

const produc2tIndex = productsV2.findIndex(item => item.id ===update.id);
const v3 =  productsV2.map(item)

console.log(v3)