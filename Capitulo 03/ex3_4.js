const prompt = require("prompt-sync")();
const peso = prompt("Qual o peso da ração (kg)? ");
const consumo = prompt("Consumo diário (gr) ? ");

const dias = Math.floor((peso*1000) / consumo);
const resto = (peso * 1000) - (dias*consumo);

console.log(`Duração: ${dias} dias`);
console.log(`Sobra: ${resto}`);


