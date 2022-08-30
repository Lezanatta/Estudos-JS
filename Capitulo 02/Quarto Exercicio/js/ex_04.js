const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
const precoKilo = Number(frm.inPrecoKilo.value);
const consumo = Number(frm.inConsumo.value);
const valorPagar = (consumo / 1000) * precoKilo;

resp.innerText =`Valor a pagar: R$${valorPagar.toFixed(2)}`;
e.preventDefault()
});
