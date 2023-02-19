const prompt = require("prompt-sync")({ sigint: true });
const ilosc1 = prompt("waga");
const ilosc2= prompt("wzrost")
// console.log(`You are ${age} years old.`);
// if (age >=18){console.log(`pełnoletni.`)}
// else {console.log(`niepełnoletni.`)};
let x;
let z=24.9;
let y=18.5;
x= ilosc1/(ilosc2*ilosc2);
if (x<y){console.log ('niedowaga')}
else if(x>z){console.log ('nadwaga')}
else {console.log('waga prawidłowa')};
