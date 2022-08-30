const prompt = require("prompt-sync")();
let listaVinhos = [];
let escolha = 0;
do{
    console.log("=".repeat(5) + "< Cadastro de vinhos >" + "=".repeat(5));
    console.log("=".repeat(40));
    console.log("1. Inclusão de Vinhos");
    console.log("2. Listagem de Vinhos");
    console.log("3. Pesquisa por Tipo");
    console.log("4. Média e Destaques");
    console.log("5. Finalizar");
    escolha = Number(prompt("Qual opção voce deseja? "));
    console.log("Opação escolhida: " + escolha);
    if(escolha == 5){
        break;
    }
    if(escolha == 1){
        incluirVinho();
    }
    if(escolha == 2){
        listarVinhos(listaVinhos);
    }
    if(escolha ==3){
        let tipo = prompt("Tipo de vinho: ");
        listarVinhos(listaVinhos.filter(v => v.tipo.includes(tipo)));
    }
    if(escolha == 4){
        calcularMedia();
    }

}while(true);

function incluirVinho () {
    console.log("=".repeat(5) + "< Inclusão de Vinhos >" + "=".repeat(5));
    console.log("=".repeat(40));
    let marca = prompt("Marca...: ");
    let tipo = prompt("Tipo...: ");
    let preco = Number(prompt("Preço R$...: ")); 
    listaVinhos.push({marca,tipo,preco});
    console.log("OK! Vinho Cadastrado!");
    console.log(" ");

}

function listarVinhos(vinhos){
    if(vinhos.length > 0){
        console.log("=".repeat(5) + "< Lista de Vinhos Cadastrados >" + "=".repeat(5));
        console.log("Marca".padEnd(20,".") + "Tipo".padEnd(25,".") + "Preço:R$");
        for(const vinho of vinhos){
            console.log(`${vinho.marca.padEnd(20)}${vinho.tipo.padEnd(25)}${vinho.preco.toFixed(2)}\n`);
        }
    }else{
        console.log("=".repeat(5) + "< Não existem vinhos cadastrados >" + "=".repeat(5));
        console.log("");
    }
}

function calcularMedia(){
    if(listaVinhos.length > 0){
        listaVinhos.sort((a,b) => a.preco - b.preco);
        let copiaVinhos = [...listaVinhos];
        let maior = copiaVinhos[copiaVinhos.length - 1];
        let menor = copiaVinhos[0];
        let media = copiaVinhos.reduce((soma,num) => soma += num.preco,0) / copiaVinhos.length;
        console.log("=".repeat(5) + "< Média e Destaques do Cadastro de Vinhos >" + "=".repeat(5));
        console.log("=".repeat(40));
        console.log(`Preço médio dos vinhos: ${media.toFixed(2)}`);
        console.log(`Menor valor R$: ${menor.preco.toFixed(2)}`);
        console.log(`Maior valor R$: ${maior.preco.toFixed(2)}`);
    }
}