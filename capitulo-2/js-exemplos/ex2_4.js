function calcularPreco() {
    // cria referência aos elementos da página
    var inQuilo = document.getElementById('inQuilo')
    var inConsumo = document.getElementById('inConsumo')
    var outValor = document.getElementById('outValor')

    // obtém conteúdo dos campos de entrada
    var quilo = inQuilo.value;
    var consumo = inConsumo.value;

    // calcula o valor a ser pago
    var valor = (quilo / 1000) * consumo

    // altera o conteúdo da linha de resposta
    outValor.textContent = 'Valor a pagar R$: ' + valor.toFixed(2);
}

// cria referência ao elemento btCalcular (botao)
var btCalcular = document.getElementById('btCalcular')
// registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener('click', calcularPreco)

