const frm = document.querySelector("form");
const refPre = document.querySelector("pre");
const itens = [];
frm.addEventListener("submit", (e) => {
    let produto;
    let texto = "";
    e.preventDefault();
    if(frm.rbPizza.checked){
        produto = frm.inPizza.options[inPizza.selectedIndex].text;
    }
    if(frm.rbBebida.checked){
        produto = frm.inBebida.options[inBebida.selectedIndex].text;
    }
    const descricao = frm.inDetalhePedido.value;
    itens.push({prod: produto,desc: descricao});
    
    for(const x of itens){
        texto += `${x.prod} (${x.desc})\n`
    }
    refPre.innerText = texto;

    texto = "";
})

frm.rbPizza.addEventListener("click",() =>{
    frm.inPizza.className = "exibe";
    frm.inBebida.className = "oculta";
    pegarDicaPizza(frm.inPizza.value);
})

frm.rbBebida.addEventListener("click", ()=>{
    frm.inBebida.className = "exibe";
    frm.inPizza.className = "oculta";
    frm.inDetalhePedido.placeholder = "";
})

frm.inPizza.addEventListener("click", ()=>{
    pegarDicaPizza(frm.inPizza.value);
})


const pegarDicaPizza = (tipoPizza) =>{
    if(tipoPizza == "Media"){
        frm.inDetalhePedido.placeholder = "Até 2 sabores";
    }
    if(tipoPizza == "Grande"){
        frm.inDetalhePedido.placeholder= "Até 4 sabores";
    }
    if(tipoPizza == "Familia"){
        frm.inDetalhePedido.placeholder = "Até 6 sabores";
    }
} 