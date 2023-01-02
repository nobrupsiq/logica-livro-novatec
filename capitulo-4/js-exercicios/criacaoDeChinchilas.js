function mostrarPrevisao() {
  var inNumero = document.getElementById("inNumero");
  var inAnos = document.getElementById("inAnos");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value);
  var anos = Number(inAnos.value);

  if (numero == "" || anos == "" || isNaN(numero) || isNaN(anos)) {
    alert("Preencha todos os campos corretamente...");
    inNumero.value = '';
    inAnos.value = '';
    inNumero.focus();
    return;
  }

  var total =  numero;
  var quantidade = '';

  for (var i = 1; i <= anos; i++) {
    quantidade += `${i}° Ano: ${total} Chinchilas. \n`
    total = total * 3;
  }
  outResposta.textContent = quantidade;
}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPrevisao);
