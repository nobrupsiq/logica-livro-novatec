function exibirPromocao() {
  var inProduto = document.getElementById("inProduto");
  var inPreco = document.getElementById("inPreco");
  var outTitulo = document.getElementById("outTitulo");
  var outResposta = document.getElementById("outResposta");

  var produto = inProduto.value;
  var preco = Number(inPreco.value);
  var calculo = ((preco * 3) * 0.50 + preco).toFixed(2);
  var terceiroProduto = calculo % preco;

  outTitulo.textContent = produto + " - Promoção: Leve 3 por R$  " + calculo;
  outResposta.textContent = "O 3° produto custa apenas R$ " + terceiroProduto.toFixed(2);
}

var btPromocao = document.getElementById("btPromocao");

btPromocao.addEventListener("click", exibirPromocao);
