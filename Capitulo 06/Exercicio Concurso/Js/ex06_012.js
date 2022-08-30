const frm = document.querySelector("form");
const refPre = document.querySelector("pre");

const candidatos = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;
    const acertos = Number(frm.inNumeroAcertos.value);

    candidatos.push({nome,acertos});

    btListar.dispatchEvent(new Event("click"));
})

btListar.addEventListener("click", () => {
    if(candidatos.length == 0){
        alert("Não há candidatos na lista");
        return;
    }
    list = "";
    for(const inscrito of candidatos){
        const {nome,acertos} = inscrito;
        list += `${nome} - ${acertos} acertos\n`;
    }

    refPre.innerText = list;
    list = "";
    frm.reset();
    frm.inNome.focus(); 
})

btSegundaEtapa.addEventListener("click", () => {
    if(candidatos.length == 0){
        alert("Não há candidatos na lista");
        return;
    }

    list = "";

    const requisitoAcerto = Number(prompt("Numero de acertos para a aprovação: "));
    let aprovados = candidatos.filter(candidato => candidato.acertos >= requisitoAcerto);
    aprovados.sort((a,b) => a.acertos - b.acertos);
    aprovados.reverse();
    for(const candidato of aprovados){
        const {nome,acertos} = candidato;
        list += `${nome} - ${acertos}\n`;
    }
    if (list == "") {
        refPre.innerText = "Não há candidatos aprovados..."
      } else {
        refPre.innerText = list
      }

      list = "";
})
