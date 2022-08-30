const prompt = require("prompt-sync")();
let numero;

do {
    numero = Number(prompt("Digite um numero: "));
    if(numero == 0 || isNaN(numero)){
        alert("Numero inválido!");
    }
    
}while (numero == 0 || isNaN(numero))

let pares = `Pares entre 1 e ${numero}: `;

for(let i = 2; i <= numero; i = i + 2){
    pares = pares + i + ", ";
}
console.log(pares);

