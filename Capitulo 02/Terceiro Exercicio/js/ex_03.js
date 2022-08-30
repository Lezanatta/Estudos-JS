const frm = document.querySelector("form");
const promocao = document.querySelector("#promocao");
const entrada = document.querySelector("#entrada");
const parcelas = document.querySelector("#parcelas");

frm.addEventListener("submit", (e)=> {
    const modelo = frm.Veiculo.value;
    const preco = frm.preco.value;

    const valorEntrada = preco * 0.50;
    const parcela = (preco * 0.50) / 12;

    promocao.innerText = `Promoção: ${modelo}`;
    entrada.innerText = `Entrada de : R$${valorEntrada.toFixed(2)}`;
    parcelas.innerText = `+ 12x de R$${parcela.toFixed(2)}`;

    e.preventDefault();
});