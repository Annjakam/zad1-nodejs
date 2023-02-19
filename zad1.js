const prompt = require("prompt-sync")({ sigint: true });
const ilosc = prompt("Ile gwiazdek ");
// console.log(`You are ${age} years old.`);
// if (age >=18){console.log(`pełnoletni.`)}
// else {console.log(`niepełnoletni.`)};
let s = "" 
for (let i=0; i<ilosc; i++) {//console.log ('*');
s += '*';  
console.log(s)
//console.log ('*')
}
//nowa gałąź