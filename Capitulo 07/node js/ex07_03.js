const prompt = require("prompt-sync")();
const palavra = prompt("palavra: ");

let palavraInvertida = palavra.charAt(palavra.length -1).toUpperCase();

for(let i = palavra.length -2; i >= 0; i--){
    palavraInvertida += palavra.charAt(i).toLocaleLowerCase();
}

let letras = "saladas";

let copia = letras.substr(2,4);
console.log("copia: " + copia);

console.log(`Palavra invertida: ${palavraInvertida}`);