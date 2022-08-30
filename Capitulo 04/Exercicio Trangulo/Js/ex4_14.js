const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    const triangulo = ladoA + ladoB < ladoC ? false : ladoA + ladoC < ladoB ? false :
    ladoB + ladoC < ladoA ? false : true;

    console.log(triangulo);
    if(triangulo){
        if(ladoA == ladoB && ladoA == ladoC){
            resp.innerText = `É um triângulo Equilátero`;
        }else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
            resp.innerText = `É um triângulo Escaleno`;
        }else{
            resp.innerText = `É um triângulo Isóceles`;
        }
    }else{
        resp.innerText = `Os lados não formam um triângulo.`;
    }
   
});