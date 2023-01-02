function mostrarPrevisao() {
  var inNumero = document.getElementById("inNumero");
  var inAnos = document.getElementById("inAnos");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value);
  var anos = Number(inAnos.value);

  if (numero == "" || anos == "" || isNaN(numero) || isNaN(anos)) {
    alert("Preencha todos os campos corretamente...");
    inNumero.focus();
    return;
  }

  var resposta = '';


  for (var i = 1; i <= anos; i++) {
    resposta = resposta + i + "° Ano: ";
  }
  outResposta.textContent = resposta;
}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPrevisao);
