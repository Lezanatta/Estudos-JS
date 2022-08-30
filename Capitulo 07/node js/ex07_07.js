const prompt = require("prompt-sync")();

const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;


do{
    let condicao = prompt("Digitar a compra? (s/n)? ");
    if(condicao == "n" || condicao == "N"){
        break;
    }
    let dataVencimento = prompt("Digite a data de vencimento: ");
    let valor = Number(prompt("Qual o valor da conta? "));

    const hoje = new Date();
    const vencimento = new Date();

    const partes = dataVencimento.split("-");
    console.log(partes.toString());
    vencimento.setDate(Number(partes[0]));
    vencimento.setMonth(Number(partes[1]));
    vencimento.setFullYear(Number(partes[2]));

    console.log(hoje);
    console.log(vencimento.getMonth());
    console.log(vencimento);

    const atraso = hoje - vencimento;
    console.log(`atraso ${atraso}`);

    let multa = 0;
    let juros = 0;

    if(atraso > 0){
        const dias = atraso / 86400000;
        multa = valor * TAXA_MULTA;
        juros = valor * TAXA_JUROS * dias;
    }

    const total = valor + multa + juros;

    console.log(`Multa: ${multa.toFixed(2)}\nJuros: ${juros.toFixed(2)}\nTotal: ${total.toFixed(2)}`);
}while(true);
