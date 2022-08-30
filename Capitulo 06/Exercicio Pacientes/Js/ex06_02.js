const frm = document.querySelector("form");
const refPre = document.querySelector("pre");
const refAtendimento  = document.querySelector("h3");
const pacientes = [];
let lista = "";
frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const pessoa = frm.inPaciente.value;
    pacientes.push(pessoa);

    pacientes.forEach((paciente,i) =>{
        lista += `${i+1}. ${paciente}\n`;
    });
    
    refPre.innerText = lista;

    lista = "";

    frm.inPaciente.value = "";
    frm.inPaciente.focus();
});

frm.btUrgencia.addEventListener("click", ()=>{

    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de urgência.");
        frm.inPaciente.focus();
        return;
    }

    const pessoa = frm.inPaciente.value;
    pacientes.unshift(pessoa);

    pacientes.forEach((paciente,i) =>{
        lista += `${i+1}. ${paciente}\n`;
    });

    refPre.innerText = lista;

    lista = "";
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
});

frm.btAtender.addEventListener("click", ()=>{
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera");
        frm.inPaciente.focus();
        return;
    }
    
    refAtendimento.innerText = `Em Atendimento: ${pacientes.shift()}`;
    
    pacientes.forEach((paciente, i) =>{
        lista += `${i+1}. ${paciente}\n`;
    })

    refPre.innerText = lista;

    frm.inPaciente.value = "";
    frm.inPaciente.focus();
    lista = "";
});