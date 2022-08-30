const frm = document.querySelector("form");
const refPre = document.querySelector("pre");
const refHtres = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let texto;
    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);
    const divisao = nome.split(" ");
    texto = `${nome}\n`;
    for(const posicao of divisao){
        texto += retortarTracos(posicao) + " ";
    }

    texto += `\nCategoria: ${categorizarAluno(idade)}`;

    refPre.innerText = texto;
    texto = "";
})

function retortarTracos(nome){
    return "-".repeat(nome.length);
}

function categorizarAluno(idade){
    if(idade <= 12){
        return `Infantil`;
    }if(idade >= 13 && idade <= 18){
        return `Juvenil`;
    }else{
        return `Adulto`;
    }
}
