const frm = document.querySelector("form");
const refPre = document.querySelector("pre");

let cripPar = "";
let cripImpar = "";

btCrip.addEventListener("click", () =>{

    const mensagem = frm.inMensagem.value;

    for(let i = 0; i < mensagem.length; i++){
        if(i % 2 != 0 || i % 2 == 1){
            cripPar += mensagem.charAt(i);
        }else{
            cripImpar += mensagem.charAt(i);
        }
    }

    refPre.innerText = cripPar + cripImpar;

    frm.reset();
});

btDescrip.addEventListener("click", () => {
    let posicaoPar = 0;
    let posicaoImpar = 0;
    let texto = "";
    let tam = cripImpar.length + cripPar.length;
    for(let i = 0; i < tam; i++){
        if(i % 2 == 0){
            texto+=cripImpar[posicaoImpar];
            posicaoImpar++;
        }else{
            texto+= cripPar[posicaoPar];
            posicaoPar++;
        }
    }

    refPre.innerText = texto;
})