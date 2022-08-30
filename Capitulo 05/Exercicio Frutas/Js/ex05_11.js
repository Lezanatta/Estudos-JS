const frm = document.querySelector("form");
const refResp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nomeFruta = frm.inFruta.value;
    const repeticao = Number(frm.inRepeticao.value);

    resposta = "";
    for(let i = 1; i < repeticao; i++){
        resposta = `${resposta}${nomeFruta} * `
    }
    resposta = `${resposta}${nomeFruta}`;

    refResp.innerText = resposta;
})