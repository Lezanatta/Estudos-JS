
//cria referência ao formulário e ao h3 onde será exibido a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria um ouvinte de evento, acionado quando o botao submit for clicado

frm.addEventListener("submit" , (e) =>{
const nomeFilme = document.querySelector("form").tituloFilme.value;
const duracao = Number(frm.duracaoFilme.value);
const min = duracao % 60;
const hora = (duracao - min) / 60;

console.log(nomeFilme,duracao,hora,min);
resp.innerText = `${nomeFilme}`;
resp2.innerText = `${hora} hora(s) e ${min} minuto(s)`;
e.preventDefault()              //evita envio do form
});