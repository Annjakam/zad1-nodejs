const prompt = require("prompt-sync")({ sigint: true });
const ilosc = prompt("Stopnie celsjusza ");
// console.log(`You are ${age} years old.`);
// if (age >=18){console.log(`pełnoletni.`)}
// else {console.log(`niepełnoletni.`)};
let x ;
x= 1.8 * ilosc + 32
console.log (x)