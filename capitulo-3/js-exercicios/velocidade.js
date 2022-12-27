function verificarVelocidade() {
  var inPermitida = document.getElementById("inPermitida");
  var inCondutor = document.getElementById("inCondutor");
  var outResposta = document.getElementById("outResposta");

  var permitida = Number(inPermitida.value);
  var condutor = Number(inCondutor.value);

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

  var ateVinte = permitida * 0.2;
  var velocidade = ateVinte + permitida;

  if (condutor <= permitida) {
    outResposta.textContent = "Resposta: Sem Multa";
  } else if (condutor >= permitida && condutor <= velocidade) {
    outResposta.textContent = "Resposta: Multa Leve";
  } else if (condutor > velocidade) {
    outResposta.textContent = "Resposta: Multa Grave";
  }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarVelocidade);
