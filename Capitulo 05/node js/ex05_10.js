const prompt = require("prompt-sync")();
const conta = Number(prompt("Qual o valor da conta? "));
const Nummeroparcelas = Number(prompt("Quantas vezes voce deseja parcelar? "));
let resposta = "";
let centavos = conta % Nummeroparcelas;
for(let i = 1; i < Nummeroparcelas; i++){
    resposta = `${resposta}${i}º parcela de ${Math.floor(conta / Nummeroparcelas)}\n`;
}
resposta = `${resposta}${Nummeroparcelas}º parcela de ${(Math.floor(conta/Nummeroparcelas) + centavos).toFixed(2)}`

console.log(resposta);