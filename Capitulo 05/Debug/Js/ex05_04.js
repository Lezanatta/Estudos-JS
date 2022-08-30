const frm = document.querySelector("form");
const refResp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let estrelas = "";
    const numero = Number(frm.inNumero.value);

    for(let i = 1; i <= numero; i++){
        if(i % 2 != 0){
            estrelas = `${estrelas}*`;
        }else{
            estrelas = `${estrelas}-`;
        }
    }

    refResp.innerText = estrelas;
})