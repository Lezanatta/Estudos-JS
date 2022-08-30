const frm = document.querySelector("form");
const refPre = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const frase = frm.inFrase.value;
    let fraseInversa = "";

    for(let i = frase.length - 1; i >= 0; i--){
        fraseInversa += frase.charAt(i);
    }

    let fraseSemEspaco = frase.replace(/ /g, "");
    let fraseSemEspaco2 = fraseInversa.replace(/ /g, "");
    if(fraseSemEspaco == fraseSemEspaco2){
        refPre.innerText = `${frase.toUpperCase()} é um palíndromo.`;
    }else{
        refPre.innerText = `${frase.toUpperCase()} não é um palíndromo.`
    }
})