const prompt = require("prompt-sync")();
const pessoas = Number(prompt("Nº Pessoas: "));
const peixes = Number(prompt("Nº Peixes: "));

let totalConta;
let valorEntrada = 20;
let valorPeixe = 12;

if(peixes <= pessoas){
    totalConta = valorEntrada * pessoas;
}else{
    totalConta = (valorEntrada * pessoas) + (peixes - pessoas) * valorPeixe;
}

console.log(`O total a ser pago é R$: ${totalConta.toFixed(2)}`);

