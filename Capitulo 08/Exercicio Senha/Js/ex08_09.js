const frm = document.querySelector("form");
const refPre = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let sobrenome = "";
    let vogais = 0;
    const nome = frm.inNome.value;
    if(validarNome(nome)){
        sobrenome = obterSobrenome(nome);
        vogais = contarVogais(nome);
    }else{
        alert("Nome incompleto!");
    }

    refPre.innerText = `Senha Inicial: ${sobrenome}${vogais}`;
})


function validarNome(nome){
    const partes = nome.split(" ");
    return partes.length > 1;
}

function obterSobrenome(nome){
    const partes = nome.split(" ");
    return partes[partes.length - 1].toLowerCase();
}

function contarVogais(nome){
    let vogais = 0;
    for(let i = 0; i < nome.length; i++){
        if(nome.charAt(i) == "a" || nome.charAt(i) == "e" || nome.charAt(i) == "i" || nome.charAt(i) == "o" || nome.charAt(i) == "u"){
            vogais++;
        }
    }
    return ("00" + vogais).slice(-2);
}