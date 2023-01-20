let inPaciente = document.getElementById("inPaciente");
let outLista = document.getElementById("outLista");
let outAtendimento = document.getElementById("outAtendimento");
let btAdicionar = document.getElementById("btAdicionar");
let btUrgencia = document.getElementById("btUrgencia");
let btAtender = document.getElementById("btAtender");

let pacientes = [];

function adicionarGlobal() {
  function adicionarPaciente() {
    let nome = inPaciente.value;

    if (nome == "") {
      alert("Informe o nome do paciente");
      inPaciente.focus();
      return;
    }

    pacientes.push(nome);

    let lista = "";

    for (let i = 0; i < pacientes.length; i++) {
      lista += `${i + 1}. ${pacientes[i]} \n`;
    }

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
  }

  btAdicionar.addEventListener("click", adicionarPaciente);
}
function urgenciaGlobal() {
  function pacienteUrgencia() {
    let nome = inPaciente.value;

    if (nome == "") {
      alert("Informe o nome do paciente");
      inPaciente.focus();
      return;
    }

    pacientes.unshift(nome); // adiciona o nome ao inicio da lista

    let lista = "";

    for (let i = 0; i < pacientes.length; i++) {
      lista += `${i + 1}. ${pacientes[i]} \n`;
    }

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
  }

  btUrgencia.addEventListener("click", pacienteUrgencia);
}
function atenderGlobal() {
  function atenderPacientes() {
    if (pacientes.length == 0) {
      alert("Não há pacientes na lista de espera!");
      inPaciente.focus();
      return;
    }

    let atender = pacientes.shift(); // remove o primeiro nome do vetor

    outAtendimento.textContent = atender;
    let lista = "";

    for (let i = 0; i < pacientes.length; i++) {
      lista += `${i + 1}. ${pacientes[i]} \n`;
    }
    outLista.textContent = lista;
  }

  btAtender.addEventListener("click", atenderPacientes);
}
adicionarGlobal();
urgenciaGlobal();
atenderGlobal(); 