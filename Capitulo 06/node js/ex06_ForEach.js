const prompt = require("prompt-sync")();

const cidades = ["Pelotas", "São Lourenço", "Porto Alegre"];

for(let i = 0; i < cidades.length; i++){
    console.log(cidades[i]);
}
console.log("-".repeat(40));
console.log(cidades.toString());
console.log(cidades.join(" - "));
console.log(" ");


for(const cidade of cidades){
    console.log(cidade);
}

cidades.forEach((cidade,i)=>{
    console.log(`${i+1}º cidade: ${cidade}`);
})

console.log("*".repeat(40));

const numeros = [5,10,15,20];

let soma = 0;

numeros.forEach((num,i) =>{
    console.log(`${i+1}º numero: ${num}`);
})
numeros.forEach(num => soma += num);
console.log(`Soma dos numeros é igual a: ${soma}`);