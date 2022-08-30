const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um numero: "));
let texto = "entre " +  numero + " e 1: " + numero;
for(let i = numero - 1; i > 0; i--){
    texto = texto + ", " + i;  
}

console.log(texto);