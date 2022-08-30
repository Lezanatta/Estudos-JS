const prompt = require("prompt-sync")();
const produto = prompt("Digite o nome de um produto: ");
const numeroEtiquetas = Number(prompt("Digite o número de etiquetas desse produto: "));
let resposta = "";
for(let i = 1; i <= numeroEtiquetas / 2; i++){
    resposta = `${resposta}${produto.padEnd(30)}${produto.padEnd(30)}\n`;
}
if(numeroEtiquetas % 2 ==1){
    resposta = `${resposta}${produto}`;
}
console.log(resposta);