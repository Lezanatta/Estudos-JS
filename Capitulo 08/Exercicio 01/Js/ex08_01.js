const frm = document.querySelector("form");
const refPre = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const modelo = frm.inModelo.value;
    const ano = Number(frm.inAno.value);
    const preco = Number(frm.inPreco.value);

    const situacaoVeiculo = verificarVeiculo(ano);
    const entrada = calcularEntrada(situacaoVeiculo,preco);
    const parcelas = (preco - entrada) / 10;

    refPre.innerText = `${modelo} - ${situacaoVeiculo}\nEntrada R$: ${entrada.toFixed(2)}
+10x de ${parcelas.toFixed(2)}`;

})

const calcularEntrada = (situacao, preco) => {
    return situacao == "Novo" ? preco * 0.50 : preco * 0.30;
}

const verificarVeiculo = (ano) => {
    if(ano == new Date().getFullYear()){
        return "Novo";
    }else if(ano == new Date().getFullYear() - 1 || ano == new Date().getFullYear() - 2){
        return "Semi Novo";
    }else{
        return "Usado";
    }
}