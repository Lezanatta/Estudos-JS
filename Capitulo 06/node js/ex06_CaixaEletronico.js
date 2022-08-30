const prompt = require("prompt-sync")();
const saques = [];
let tentativaSaques = 0;

do{
    const saque = Number(prompt("Saque: "));
    if(saque == 0){
        break;
    }
    if(saque % 10 == 0){
    saques.push(saque);
    console.log("Saque realizado com sucesso.");
    }else{
        console.log("Erro... Valor inválido!(deve ser múltiplo de 10)");
        tentativaSaques++;
    }
}while(true);
console.log(" ");
console.log("-".repeat(40));
console.log("Saques válidos: ");
console.log(" ");
for(const saque of saques){
    console.log(saque);
}
console.log(" ");
console.log("-".repeat(40));
console.log(`Total dos Saques: ${saques.reduce((acumulador, num) => acumulador + num, 0)}`);
console.log(`Nº de tentativas de saques (Saques inválidos): ${tentativaSaques}`);
