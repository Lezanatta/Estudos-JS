const frm = document.querySelector("form");
const refPre = document.querySelector("pre");

let carros = [];

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let modelo= frm.inModelo.value;
    let preco = Number(frm.inPreco.value);
    carros.push({modelo,preco});
    frm.inModelo.value = "";
    frm.inPreco.value = "";
    inModelo.focus();
    frm.btListar.dispatchEvent(new Event("click"));
})


btListar.addEventListener("click", () =>{
    if(carros.length == 0){
        alert("Não há carros na lista");
        return;
    }
    const lista = carros.reduce((concat,carro) => concat + carro.modelo + " - R$: " 
+ carro.preco.toFixed(2) + "\n", "");
    refPre.innerText = `Lista dos carros cadastrados\n${"-".repeat(40)}\n${lista}`;

})

btFiltrar.addEventListener("click", () =>{
    if(carros.length == 0){
        alert("Não existe carros na lista.");
        frm.inModelo.focus();
        return;
    }

    const precoMaximo = Number(prompt("Qual o valor máximo do carro que deseja filtrar?"));
    let lista = "";
    const carrosFiltrados = carros.filter(carro => carro.preco <= precoMaximo);

    for(const carro of carrosFiltrados){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
    }

    refPre.innerText = `Lista dos carros filtrados por preço até R$: ${precoMaximo.toFixed(2)}
\n${"-".repeat(40)}\n${lista}`;
})

btPromocao.addEventListener("click", () =>{
    const desconto = Number(prompt("Qual o percentual de desconto?"));
    if(desconto == 0 || isNaN(desconto)){
        return
    }

    const carrosDescontos = carros.map(carro => ({
modelo: carro.modelo, preco: carro.preco - (carro.preco * (desconto / 100))}));
    let lista = "";

    for(const carro of carrosDescontos){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
    }

    refPre.innerText = `Lista dos carros com ${desconto}% de desconto\n${"-".repeat(40)}\n${lista}`;

})