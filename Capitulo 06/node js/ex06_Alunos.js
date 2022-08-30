const prompt = require("prompt-sync")();

let alunos = [];
let nome = "";
let idade = 0;
do{
    nome = prompt("digite o nome do aluno: ");
    if(nome == "Fim"){
        break
    }
    nota = prompt("Digite a nota do aluno: ");

    alunos.push({nome,nota});

    console.log("Ok, Aluno cadastrado.");
}while(true);

console.log("-".repeat(40));
let maiorNota = alunos.reduce((a,b) => Math.max(a,b.nota),0);
console.log(`Maior nota: ${maiorNota}.`);

if(maiorNota >= 7){

    const alunosMaioresNotas = alunos.filter(aluno => aluno.nota == maiorNota);

    for(const aluno of alunosMaioresNotas){
        console.log(`- ${aluno.nome}`);
    }
}else{
    console.log("Não há alunos em destaque na turma.");
}