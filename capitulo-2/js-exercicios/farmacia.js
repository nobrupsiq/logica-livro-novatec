function exibirPromocao() {
  var inTitulo = document.getElementById("inTitulo");
  var inPreco = document.getElementById("inPreco");
  var outTitulo = document.getElementById("outTitulo");
  var outValor = document.getElementById("outValor");

  var titulo = inTitulo.value;
  var preco = Number(inPreco.value);

  var desconto = Math.floor(preco).toFixed(2);

  outTitulo.textContent = titulo;
  outValor.textContent = "Leve 2 por apenas R$: " + desconto;
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", exibirPromocao);
