//creer un tableau [1,2,3]
let tab = [1,2,3];
//(1*1)+(2*2)+(3*3)
let sum1 = tab.reduce((acc, valeur)=>{
    return acc += valeur ** 2
},0)
console.log(sum1);
//reponse 14