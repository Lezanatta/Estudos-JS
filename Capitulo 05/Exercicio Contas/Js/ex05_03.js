const frm = document.querySelector("form");
const refContas = document.querySelector("#inContas");
const refValorTotal = document.querySelector("#inValorTotal");

let resposta = "";
let contadorContas = 0;
let valorSomaContas = 0;
valorTotal = 0;

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    contadorContas++;
    let descricaoConta = frm.inDescricao.value;
    let valorConta = Number(frm.inValor.value);

    valorSomaContas += valorConta;

    resposta = `${resposta}${descricaoConta} - valor: R$ ${valorConta.toFixed(2)}\n`;

    console.log(resposta);

    refContas.innerText = `${resposta}---------------------------------------`;
    refValorTotal.innerText = `${contadorContas} Conta(s) - Valor total: R$${valorSomaContas.toFixed(2)}`;

    frm.inDescricao.value = "";
    frm.inValor.value = "";
    frm.inDescricao.focus();
});