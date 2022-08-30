const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    const min = Number(frm.inTempo.value);
    const preco = Number(frm.inValor.value);

    const valorPagar = Math.round(min / 15) * preco;

    resp.innerText = `Valor a Pagar: R$${valorPagar.toFixed(2)}`;
    e.preventDefault();
})