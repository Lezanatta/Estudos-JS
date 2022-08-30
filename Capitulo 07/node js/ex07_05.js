const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");

const divisao = nome.split(" ");
let email = "";
for(let i = 0; i< divisao.length -1; i++){
    email += divisao[i].charAt(0).toLowerCase();
}

email += `${divisao[divisao.length - 1].toLowerCase()}@empresa.com.br`; 

console.log(`Email: ${email}`);