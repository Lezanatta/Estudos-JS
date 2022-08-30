const frm = document.querySelector("form");
const tituloPromocao = document.querySelector("#inTitulo");
const promocao = document.querySelector("#inPromocao");

frm.addEventListener("submit", (e) => {
    const nomeMedicamento = frm.inMedicamento.value;
    const precoRemedio = Number(frm.inPreco.value);

    const desconto = Math.floor(precoRemedio) * 2;

    tituloPromocao.innerText = `Promoção de ${nomeMedicamento}`;
    promocao.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`;

    e.preventDefault();
});