const prompt = require("prompt-sync")();
const numeroParcelas = Number(prompt("Numero de parcelas: "));

const dataAtual = new Date();
let dataVencimentos = new Date();

let resposta = "";
for(let i = 1; i <= numeroParcelas; i++){
    dataVencimentos.setMonth(dataVencimentos.getMonth()+1);
    resposta = `${i}º parcela: ${dataVencimentos.getDate().toString().padStart(2,"0")}/`;
    resposta += `${dataVencimentos.getMonth().toString().padStart(2,"0")}/`
    resposta += `${dataVencimentos.getFullYear().toString().padStart(2,"0")}`;
    console.log(resposta);
}