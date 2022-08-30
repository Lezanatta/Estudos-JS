const frm = document.querySelector("form");
const refTempo = document.querySelector("#inTempo");
const refTroco = document.querySelector("#inTroco");

frm.addEventListener("submit", (e) =>{

    e.preventDefault();
    const valor = Number(frm.inValor.value);
    let texto;
    let troco;
    console.log(valor);

    if(valor < 1){
        texto = `Valor insuficiente`;
    }
    else if(valor < 1.75){
        texto = `Tempo: 30 min`;
        troco = valor - 1;
    }
    else if(valor >= 3){
        texto =  `Tempo: 120 min`;
        troco = valor - 3;
    }
    else if( valor < 3 && valor >= 1.75){
        texto = `Tempo: 60 min`;
        troco = valor - 1.75;
    }

    refTempo.innerText = texto;
    refTroco.innerText = `Troco: R$ ${troco.toFixed(2)}`;

})