const prompt = require("prompt-sync")();
let numPalavras = 0;
const anuncio = prompt("Anuncio: ");
const tam = anuncio.length;

for(const letra of anuncio){
    if(letra == " "){
        numPalavras++;
    }
}

console.log(`Anuncio: ${anuncio}\nNº palavras: ${numPalavras + 1}`);