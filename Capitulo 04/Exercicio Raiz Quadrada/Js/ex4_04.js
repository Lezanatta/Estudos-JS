const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const numero = Number(frm.inNumero.value);

    const raiz = Math.sqrt(numero);

    resp.innerText = Number.isInteger(raiz) ? "A raiz quadrada de " + numero + " é igual a: "  + raiz :
    "Não há raiz exata para o numero " + numero;;
})