const prompt = require("prompt-sync")();
const salario = Number(prompt("Qual o seu salário? "));
const tempoEmpresa = Number(prompt("Quanto tempo voce trabalha na empresa (anos)?"));

const quadrienios = Math.floor(tempoEmpresa / 4);
const acrescimo = salario * 0.01;

console.log(`Quadiênios: ${quadrienios}`);
console.log(`Salário final R$: ${((quadrienios * acrescimo) + salario).toFixed(2)}`);
