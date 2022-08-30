const frm = document.querySelector("form");
const refErros = document.querySelector("#inErros");
const refChances = document.querySelector("#inChances");
const refDica = document.querySelector("#inDica");

let chances = 6;
const numerosApostados = [];
let erros = 0; 
const numeroSoteado = Math.floor(Math.random() * 100);

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const numero = Number(frm.inNumero.value);

    if(numerosApostados.includes(numero)){
        alert("Voce já apostou esse numero.");
        frm.inNumero.value = "";
        frm.inNumero.focus();
        return;
    }
    if(numero == numeroSoteado){
        alert("Parabéns voce acertou o numero!");
        frm.btSubmit.disabled = true;
        frm.btNovo.className = "";
        refErros.innerText = "Parabéns";
        refDica.innerText = "";
        refChances.innerText = "";
        return;
    }if(chances != 0){
        chances--;
        erros++;
        numerosApostados.push(numero);
        frm.inNumero.value = "";
        frm.inNumero.focus();
        refErros.innerText = `Erros: ${erros}`;
        refChances.innerText = `Chances: ${chances}`;
        refDica.innerText = `${numero > numeroSoteado ? "o numero sorteado é menor": "O numero sorteado é maior."}`;
        return;
    }if(chances == 0){
        alert("Suas chances acabaram.");
        frm.btSubmit.disabled = true;
        frm.btNovo.className = "";
        refErros.innerText = `Erros: ${erros} (${numerosApostados.toString()})`;
        refDica.innerText = `Game over! O numero sorteado foi: ${numeroSoteado}`;
    }
})

frm.btNovo.addEventListener("click", () =>{
    location.reload();
})