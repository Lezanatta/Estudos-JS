const prompt = require("prompt-sync")();
const senha = prompt("Digite sua senha: ");
let erros = 0;

if(senha.length < 8 || senha.length > 15){
    console.log("senha deve possuir entre 8 a 15 caracteres.");
    erros++;
}

if(!senha.match(/[0-9]/g)){
    console.log("Senha deve possuir pelo menos 1 numero.");
    erros++;
}

if(!senha.match(/[a-z]/g)){
    console.log("Senha deve possuir no minimo uma letra minuscula.");
    erros++;
}

if(senha.match(/[A-Z]/g).length == 1 || !senha.match(/[A-Z]/g)){
    console.log("Senha deve possuir no minimo duas letras maiusculas.");
    erros++;
}

if(!senha.match(/\W|_/g)){
    console.log("Senha precisa ter um simbolo.");
    erros++;
}

if(erros == 0){
    console.log("Senha válida.")
}else{
    console.log("Senha não é válida.");
}