const prompt = require("prompt-sync")();
const numero = Number(prompt("Numero: "));
let soma = 0;
for(let i = 1; i < numero; i++){
    if(numero % i == 0){
        soma += i;
    }
}
console.log(soma);
if(soma == numero){
    console.log(`${numero} é um numero perfeito.`);
}else{
    console.log(`${numero} não é um numero perfeito.`);
}