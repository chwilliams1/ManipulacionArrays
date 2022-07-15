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
    customerName:"Valentina",
    total:240,
    delivered:true,
},
];


const newArray = orders.map(item=> item.total);



const newArray3 = orders.map((item) => {
    return {
        ...item,
        tax: Math.trunc(item.total *0.19)
    }
});


console.log('original ', orders)
console.log('original ', newArray)

console.log('copia ',newArray3)





