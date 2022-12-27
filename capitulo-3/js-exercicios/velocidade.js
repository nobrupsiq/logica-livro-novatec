function verificarVelocidade() {
    // leitura de dados (cria referência aos elementos da página)
  var inPermitida = document.getElementById("inPermitida");
  var inCondutor = document.getElementById("inCondutor");
  var outResposta = document.getElementById("outResposta");

  //(processamento)
  // capturando valores dos inputs 
  var permitida = Number(inPermitida.value);
  var condutor = Number(inCondutor.value);

  // verificação se não preencheu ou Not-a-Number(NaN) 
  if (
    condutor == "" ||
    isNaN(condutor) ||
    permitida == "" ||
    permitida == isNaN(permitida)
  ) {
    alert("Digite um valor válido!");
    inPermitida.focus();
    return;
  }

  // realização de operações 
  var ateVinte = permitida * 0.2;
  var velocidade = ateVinte + permitida;

  // apresentação de mensagem (saída)
  if (condutor <= permitida) {
    outResposta.textContent = "Resposta: Sem Multa";
  } else if (condutor >= permitida && condutor <= velocidade) {
    outResposta.textContent = "Resposta: Multa Leve";
  } else if (condutor > velocidade) {
    outResposta.textContent = "Resposta: Multa Grave";
  }
}

// cria referência ao elemento btVerificar e registra o evento que irá carregar a função
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarVelocidade);
