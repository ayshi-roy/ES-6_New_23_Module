// // step1:
// function add(num1,num2){
//     if(num2 == undefined){
//         num2 = 0;
//     }
//     num2 = num2 || 0;
//     return num1+num2;
// } 
// const total = add(12);
// console.log(total);
// //step2
// function add(num1,num2){    
//     num2 = num2 || 0;
//     return num1+num2;
// } 
// const total = add(12);
// console.log(total);
//step3
function add(num1,num2 = 0){
   
    return num1+num2;
} 
const total = add(12,45);
console.log(total);