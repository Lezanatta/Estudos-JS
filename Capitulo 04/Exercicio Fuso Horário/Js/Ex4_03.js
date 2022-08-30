const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let hora = Number(frm.inHora.value) + 5;
    if(hora > 24){
        hora = hora - 24;
    }
    resp.innerText= `Hora na França: ${hora.toFixed(2)}`;
})