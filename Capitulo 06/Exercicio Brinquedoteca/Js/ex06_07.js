const frm = document.querySelector("form");
const refResp = document.querySelector("pre");

const criancas = [];

frm.addEventListener("submit", (e) =>{
    e.preventDefault(); 

    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);
    criancas.push({nome,idade});
    frm.reset();
    inNome.focus();

    frm.btListar.dispatchEvent(new Event("click"));
    
})

btListar.addEventListener("click", () =>{
    if(criancas.length == 0){
        alert("Não há crianças na lista.")
        return
    }
    lista = "";

    for(const crianca of criancas){
        const {nome, idade} = crianca;  //DESESTRUTURANDO O OBJETO CRIANÇA 
        lista += `${nome} - ${idade} anos\n`;
    }

    refResp.innerText = lista;
})

btIdade.addEventListener("click", () => {
    if(criancas.length == 0){
        alert("Não há crianças na lista.")
        return
    }
    const copia = [...criancas];
    copia.sort((a,b) => a.idade - b.idade);

    let resumo = "";
    let idadeAux = copia[0].idade;
    let nomes = [];

    for(const crianca of copia){
        const {nome,idade} = crianca;
        if(idadeAux == idade){
            nomes.push(nome);
            continue;
        }
        resumo += `${idadeAux} ano(s) - ${nomes.length} criança(s) - `;
        resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`;
        resumo += `(${nomes.join(", ")})\n`;

        nomes = [];
        nomes.push(nome);
        idadeAux = idade;
    }
    resumo += `${idadeAux} ano(s) - ${nomes.length} criança(s) - `;
    resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`;
    resumo += `(${nomes.join(", ")})\n`;

    refResp.innerText = resumo;
})