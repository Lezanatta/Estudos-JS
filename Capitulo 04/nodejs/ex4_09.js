const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite uma centena: "));
let resto;
let centena;
let dezena;
let unidade;
if(numero<100){
    alert("Este numero nao é uma centena.");
}else{
    centena = Math.floor(numero/100);
    resto = numero % 100;
    dezena = Math.floor(resto/10);
    unidade = resto % 10;
}

console.log(`Invertido: ${unidade}${dezena}${centena}`);