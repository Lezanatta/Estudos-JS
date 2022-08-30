const prompt = require("prompt-sync")();

do{
    const ano = Number(prompt("Digite algum ano: "));
    if(ano == 0){
        break;   
    }
    if(ano == 1942 || ano == 1946){
        console.log("não houve copa por conta da segunda guerra mundial");
    }

    if(ano >= 1930 && ano % 4 == 2){
        console.log("Ano de copa do mundo!")
    }else{
        console.log("Nao é ano de copa do mundo.");
    }
}while(true)