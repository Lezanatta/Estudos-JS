const frm = document.querySelector("form");
const resp = document.querySelector("h3");


frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const velocidade = Number(frm.inVelocidade.value);
    const condutor = Number(frm.inCondutor.value);
    const diferença = condutor - velocidade;
    const porcentagem = (diferença / 80).toFixed(2);
    console.log(porcentagem);


    if(diferença < 0 ){
        resp.innerText = `Situação: Sem multa`;
    }

    resp.innerText = porcentagem == 0 ? `Situação: Sem multa` : porcentagem > 0.20 ? `Situação: Multa Grave`:
    `Situação: Multa leve`;
})