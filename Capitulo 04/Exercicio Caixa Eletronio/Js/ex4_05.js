const frm = document.querySelector("form");
const refNota100 = document.querySelector("#nota100");
const refNota50 = document.querySelector("#nota50");
const refNota10 = document.querySelector("#nota10");
const refNota2 = document.querySelector("#nota2");



frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let valor = Number(frm.inValor.value);

    if(valor < 10 || valor % 2 != 0){
        alert("Valor inválido para notas de R$10, R$50, R$100");
    }
    else{
        let nota100;
        let nota50;
        let nota10;
        let nota2;

        nota100 = Math.floor(valor/100);
        let resto = valor % 100;

        nota50 = Math.floor(resto/50);
        resto = resto % 50;

        nota10 = Math.floor(resto/10);
        resto = resto % 10;

        nota2 = Math.floor(resto/2);

        if(nota100 != 0){       
            refNota100.innerText = `Notas de 100 R$: ${nota100}`;
        } 

        if(nota50 != 0){   
            refNota50.innerText = `Notas de 50 R$: ${nota50}`;
        }  

        if(nota10 != 0){   
            refNota10.innerText = `Notas de 10 R$: ${nota10}`;
        }

        if(nota2 != 0){   
            refNota2.innerText = `Notas de 2 R$: ${nota2}`;
        }
    }
})

frm.addEventListener("reset", () =>{
    refNota100.innerText = "";
    refNota50.innerText = "";
    refNota10.innerText = "";
    refNota2.innerText = "";
})