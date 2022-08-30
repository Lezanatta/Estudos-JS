const frm = document.querySelector("form");
const resp = document.querySelector("h3");


frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const numero = Number(frm.inNumber.value);

    resp.innerText = numero % 2 == 0 ? `${numero} é par` : `${numero} é impar`;
});