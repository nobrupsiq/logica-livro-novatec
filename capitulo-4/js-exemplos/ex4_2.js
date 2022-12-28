function listarNumeros() {
  // cria referência aos elementos que a function irá manipular
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  // obtem número informado no input
  var numero = Number(inNumero.value);

  // verifica a validade do numero
  if (numero == 0 || isNaN(numero)) {
    alert("Digite um número válido...");
    inNumero.focus();
    return;
  }

  // inicializa variável resposta
  var resposta = "Entre " + numero + " e 1: " + numero;

  // cria um for decrescente
  for (var i = numero - 1; i > 0; i--) {
      resposta = resposta + ', ' + i;
    }
    resposta = resposta + '.';

  // altera o conteúdo da resposta
  outResposta.textContent = resposta;
}
// referencia elemento e após associa function ao evento click
var btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", listarNumeros);
