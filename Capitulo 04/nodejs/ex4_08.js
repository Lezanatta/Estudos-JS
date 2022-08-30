const prompt = require("prompt-sync")();
const totalCompra = Number(prompt("Qual o total de sua compra? "));

    const aux = Math.floor(totalCompra / 20);
    const parcelas = aux == 0 ? 1: aux > 6 ? 6 : aux;
    const valorParcelado = totalCompra / parcelas;

    console.log(`Pode pagar em ${parcelas} parcela(s) de R$${valorParcelado.toFixed(2)}`);
