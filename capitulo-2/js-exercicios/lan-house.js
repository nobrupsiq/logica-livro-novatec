function calcularValor() {
    // criar referência aos elementos da página
  var inValor = document.getElementById("inValor");
  var inTempo = document.getElementById("inTempo");
  var outPagar = document.getElementById("outPagar");

  // obtém conteúdo dos campos de entrada
  var tempo = Number(inTempo.value);
  var valor = Number(inValor.value);

  // calcula o valor a ser pago
  var calculo = Math.ceil(tempo / 15) * valor

  // saida: exibe o total a ser pago 
  outPagar.textContent = 'Valor a Pagar R$: ' + Math.round(calculo).toFixed(2)
}

// cria referência ao botão
var btCalcular = document.getElementById("btCalcular");
// registra um evento associado ao botão
btCalcular.addEventListener("click", calcularValor);
