const prompt = require("prompt-sync")();
const nome = prompt("Digite o seu nome: ");

let divisao = nome.split(" ");

const nomeSobrenome = divisao[0] + " " + divisao[divisao.length-1];
console.log(`${nomeSobrenome}`);