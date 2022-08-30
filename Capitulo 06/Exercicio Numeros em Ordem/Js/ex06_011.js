const frm = document.querySelector("form");
const refPre = document.querySelector("pre");
const refOrdem = document.querySelector("h4");


const numeros = [];

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    if(numeros.includes(numero)){
        alert("Já existe esse numero na lista.");
        return;
    }
    numeros.push(numero);
    list = `Numeros: ${numeros[0]}`;
    
    for(let i = 1; i < numeros.length; i++){
        list += `, ${numeros[i]}`;
    }
    refPre.innerText = list;
    list = "";
    inNumero.value = "";
    inNumero.focus();
})

btOrdem.addEventListener("click", () =>{
    if(numeros.length == 0){
        alert("Não há elementos na lista.");
        return;
    }

    let verificaOrdem = true;
    for(let i = 0; i < numeros.length; i++){
        for(let j = i+1; j < numeros.length; j++){
            if(numeros[i] < numeros[j]){
                continue;
            }else{
                verificaOrdem = false;
            }
        }
    }

    if(verificaOrdem){
        refOrdem.innerText = `Atenção... Numeros estão em ordem crescente.`;
    }else{
        refOrdem.innerText = `Atenção... Numeros não estão em ordem crescente.`
    }
})