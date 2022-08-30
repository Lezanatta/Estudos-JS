const frm = document.querySelector("form");
const refPre = document.querySelector("pre");
const clubes = [];
let jogos = [];
let list = "";
frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const clube = frm.inClube.value;
    clubes.push(clube);

    btListar.dispatchEvent(new Event("click"));
})

btListar.addEventListener("click", () =>{
    if(clubes.length == 0){
        alert("Não há clubes para serem listados.")
        return;
    }

    for(const club of clubes){
        list += `- ${club}\n`;
    }   

    refPre.innerText = list;

    list = "";
    frm.inClube.value = "";
    frm.inClube.focus();
})

btTabela.addEventListener("click", () =>{

    if(clubes.length < 2){
        alert("Não é possível montar a tabela por conta da quantidade de times.");
        return;
    }
    
    for(let i = 0; i < clubes.length; i++){
        let j = (clubes.length - 1) - i;
        if(i > j){
            break;
        }
        if(clubes[i] == clubes[j]){
            jogos.push({primeiroClube: clubes[i], segundoClube: "Não definido"});
            continue;
        }
        jogos.push({primeiroClube: clubes[i], segundoClube: clubes[j]});
    }

    for(const partida of jogos){
        list += `${partida.primeiroClube} x ${partida.segundoClube}\n`;
    }

    refPre.innerText = list;

    list = "";
    jogos = [];

})

