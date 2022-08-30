const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let fruta = frm.inFruta.value;

    let resposta = "";

    for(const letra of fruta){
        if(letra == fruta.charAt(0)){
            resposta+= fruta.charAt(0);
        }else{
            resposta += "_";
        }
    }

    resp.innerText = resposta;
    frm.inFruta.value = "*".repeat(fruta.length)
})