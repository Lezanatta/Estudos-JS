const prompt = require("prompt-sync")();
const clientes = [];

do{
    const nome = prompt("Digite o nome do cliente:");
    if(nome == "Fim"){
        break;
    }
    const idade = Number(prompt("Digite a idade do cliente: "));
    clientes.push({nome,idade});
    console.log("OK! Cliente inserido na fila...");
}while(true);
    const preferencial = clientes.filter(cliente => cliente.idade >= 60);
    const fileNomral = clientes.filter(cliente => cliente.idade < 60);

    console.log(" ");
    console.log("Atendimento preferencial:");
    console.log(" ");
    for(const cliente of preferencial){
        const {nome,idade} = cliente;
        console.log(`${nome} - ${idade} anos.`);
    }
    console.log("-".repeat(40));
    console.log("Atendimento fila normal:")
    console.log(" ");
    for(const cliente of fileNomral){
        const {nome,idade} = cliente;
        console.log(`${nome} - ${idade} anos.`);
    }
