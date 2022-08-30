/*const prompt = require("prompt-sync")();

const numeros = [10,13,20,8,15];

const pares = numeros.filter(num => num % 2 == 0);

console.log(pares.join(", "));*/


//Utilizando o método Filter
/*
const amigos = [{nome: "Ana", idade: 20},
                {nome: "Bruno", idade: 17},
                {nome: "Cátia", idade: 25}];

const amigos2 = amigos.filter(p => p.idade >= 21 || p.nome.includes("B"));

if(amigos2.length == 0){
    console.log("Não há amigos com essas condições.");
}
for(const pessoa of amigos2){
    console.log(`${pessoa.nome} - idade: ${pessoa.idade} anos`);
}*/

//Utilizando o método reduce

/*const numeros = [10,13,20,8,15];
const soma = numeros.reduce((acumulador,num) => acumulador + num, 0);
console.log(`Soma: ${soma}`);

const amigos = [{nome: "Ana", idade: 20},
                {nome: "Bruno", idade: 17},
                {nome: "Cátia", idade: 25}];

const somaIdade = amigos.reduce((acumula,amigo) => acumula + amigo.idade, 0);
const concatenaNome = amigos.reduce((concatena, amigo) => concatena + amigo.nome + " ","");


console.log("".padEnd(40,"*"));
console.log(somaIdade);
console.log(concatenaNome);*/

const numeros = [10,13,20,8,15];
const maior = numeros.reduce((aux,num) => Math.max(aux,num),0);

console.log(`Maior: ${maior}`);
