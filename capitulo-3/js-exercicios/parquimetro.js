function confirmarDeposito() {
  var inValor = document.getElementById("inValor");
  var outTempo = document.getElementById("outTempo");
  var outTroco = document.getElementById("outTroco");

  var valor = Number(inValor.value);

  outTroco.textContent = '';
  outTempo.textContent = '';

  if(valor == '' || isNaN(valor)) {
    alert('Digite um valor valido!');
    inValor.focus();
    return;
  }

  if(valor < 1.00) {
    alert("Valor insuficiente");
    inValor.focus()
    return
  }
  
  if(valor >= 1.00 && valor < 1.75) {
    var troco = valor % 1;
    outTempo.textContent = 'Tempo: 30min'
    if(troco != 0) {
        outTroco.textContent = 'Troco R$: ' + troco.toFixed(2);
    }
  }

  if(valor >= 1.75 && valor < 3.00) {
    troco = valor % 1.75;
    outTempo.textContent = 'Tempo: 60 min';
    if(troco != 0) {
        outTroco.textContent = 'Troco R$: ' + troco.toFixed(2)
    }
  }

  if(valor >= 3.00) {
    var troco = valor - 3.00
    outTempo.textContent = 'Tempo: 120min'
    if(troco != 0) {
        outTroco.textContent = 'Troco R$: ' + troco.toFixed(2);
    }
  }
}
var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", confirmarDeposito);
