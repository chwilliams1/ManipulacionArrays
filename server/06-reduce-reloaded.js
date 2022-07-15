
const list = [1,2,3,3,4,2,10,4,5,6,7,1,9,1];
const rta5 = list
.reduce((obj,item) =>{
    if(item<=5){
        obj['1-5'] +=1;
        console.log(obj[item])
    }else if(item>=6 && item<=8){
        obj['6-8'] +=1;
    }else if(item>=8 && item<= 10){
        obj['9-10'] +=1; 
    }
    console.log(obj[item])
    return obj
},{
    '1-5':0,
    '6-8':0,
    '9-10':0,

})

console.log(rta5)




// const data = [
//     {
//       name: "Nicolas",
//       level: "low",
//     },
//     {
//       name: "Andrea",
//       level: "medium",
//     },
//     {
//       name: "Zulema",
//       level: "hight",
//     },
//     {
//       name: "Santiago",
//       level: "low",
//     },
//     {
//       name: "Valentina",
//       level: "medium",
//     },
//     {
//       name: "Lucia",
//       level: "hight",
//     },
//   ];

  
// const rta1 = data
// .map(item=> item.level)
// .reduce((obj, item) =>{
//     if(obj[item]){
//         obj[item] += 1;}
//     else{
//         obj[item] =1;
//     }
//     return obj;
// }, {})

// console.log(rta1)

//output
// {
//     1:1,
//     3:2,
//     2:1,
// }