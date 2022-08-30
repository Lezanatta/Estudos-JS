const prompt = require("prompt-sync")();

const altura = Number(prompt("Altura da árvore: "));

let arvore = "";
let espaco = 30;
console.log();
for(let i = 1; i <= altura; i++){
    arvore+= " ".repeat(espaco - i) + "*".repeat(2*i);
    arvore +="\n\n"
}
console.log(arvore);