const prompt = require("prompt-sync")({ sigint: true });
const ilosc1 = prompt("1 liczby całkowite");
const ilosc2= prompt("2 liczby całkowite")
// console.log(`You are ${age} years old.`);
// if (age >=18){console.log(`pełnoletni.`)}
// else {console.log(`niepełnoletni.`)};
console.log (ilosc1, ilosc2);
if (ilosc1>ilosc2)
{
console.log (ilosc2, ilosc1)
}
if (ilosc2>ilosc1)
{
console.log (ilosc1, ilosc2)
}
