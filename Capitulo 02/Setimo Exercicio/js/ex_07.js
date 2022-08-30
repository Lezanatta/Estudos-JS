const frm = document.querySelector("form");
const tituloPromocao = document.querySelector("#tituloPromocao");
const descricaoPromocao = document.querySelector("#descricaoPromocao");

frm.addEventListener("submit", (e) =>{
    const descricao = frm.inDescricao.value;
    const preco = frm.inPreco.value;
    const valorDescto = (preco / 2) + preco * 2;

    tituloPromocao.innerText = `${descricao} - Promoção: Leve 3 por R$: ${valorDescto.toFixed(2)}`;
    descricaoPromocao.innerText = `O 3º produto custa apenas R$: ${(preco / 2).toFixed(2)}`;

    e.preventDefault()
})