const prompt = require("prompt-sync")();
const num1 = Number(prompt("1º numero: "));
const num2 = Number(prompt("2º numero: "));

const soma = num1 + num2;

console.log(`Soma é: ${soma}`);