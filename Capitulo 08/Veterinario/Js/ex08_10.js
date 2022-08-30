const frm = document.querySelector("form");
const refH = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const valorVacina = Number(frm.inValor.value);
})

frm.inRadioNao.addEventListener("click", () =>{
    frm.inConvenio.className = "oculta";
})