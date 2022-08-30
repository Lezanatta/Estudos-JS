
//cria referência ao formulário e ao h3 onde será exibido a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um ouvinte de evento, acionado quando o botao submit for clicado

frm.addEventListener("submit" , (e) =>{
const nomeFilme = document.querySelector("form").inNome.value;
resp.innerText = `${nome}`;
e.preventDefault()              //evita envio do form
});