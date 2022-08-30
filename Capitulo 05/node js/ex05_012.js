const prompt = require("prompt-sync")();
let chinchilas = Number(prompt("Numero: "));
const anos = Number(prompt("Anos: "));
console.log(`1º ano: ${chinchilas} chinchilas`);
for(let i = 2; i <= anos; i++){
    chinchilas = chinchilas * 3;
    console.log(`${i}º ano: ${chinchilas} chinchilas`);
}