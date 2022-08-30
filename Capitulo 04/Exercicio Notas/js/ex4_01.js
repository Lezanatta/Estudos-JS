const frm = document.querySelector("form");
const refMedia = document.querySelector("#inMedia");
const refSituacao = document.querySelector("#inSituacao");

frm.addEventListener("submit", (e) =>{
    
    e.preventDefault();
    const nome = frm.inNome.value;
    const primeiraNota = Number(frm.inNota.value);
    const segundaNota = Number(frm.inSegundaNota.value);

    const media = (primeiraNota+segundaNota) / 2;

    console.log(media);

    refMedia.innerText = `Média das Notas ${media.toFixed(2)}`;
    
    if(media >= 7){
        refSituacao.innerText = `Parabéns ${nome}! você foi aprovado(a).`;
        refSituacao.style.color = "blue";
    }
    else{
        refSituacao.innerText = `${nome} voce foi reprovado!`;
        refSituacao.style.color = "red";
    }
});