const frm = document.querySelector("form");
const refPre = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let dataAtual = new Date();
    const dataInflacao = frm.inData.value;
    const valorMulta = Number(frm.inValor.value);
    let valorDesconto = valorMulta - (valorMulta * 0.2);

    const partes = dataInflacao.split("-");
    dataAtual.setDate(Number(partes[2]));
    dataAtual.setMonth(Number(partes[1]));
    dataAtual.setFullYear(Number(partes[0]));

    dataAtual.setDate(dataAtual.getDate() + 90);

    console.log(dataAtual);

    let texto = `Data limite para pagamento com desconto: ${dataAtual.getDate().toString().padStart(2,"0")}/`;
    texto += `${dataAtual.getMonth().toString().padStart(2,"0")}/`;
    texto += `${dataAtual.getFullYear().toString().padStart(2,"0")}`;
    texto += `\nvalor com desconto: ${valorDesconto.toFixed(2)}`;


    refPre.innerText = texto;

    texto = "";

})