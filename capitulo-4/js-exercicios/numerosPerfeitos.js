var inNumero = document.getElementById('inNumero')
var outDivisores = document.getElementById('outDivisores')
var outResposta = document.getElementById('outResposta')
var btVerificar = document.getElementById('btVerificar')

function mostrarNumeroPerfeito() {

  var numero = Number(inNumero.value);

  var divisores = `Divisores do ${numero} : 1`;
  var soma = 1;

  if(numero == '' || isNaN(numero)) {
    alert('Preencha o campo corretamente...')
    inNumero.value = '';
    inNumero.focus();
    return;
  }

  for(var i = 2; i <= numero / 2; i++) {
    if(numero % i == 0) {
      divisores += `, ${i}`;
      soma += i;
    }
  }
  divisores += `. (Soma: ${soma})`;
  outDivisores.textContent = divisores;

  if(numero == soma) {
    outResposta.textContent = `${numero}. Número Perfeito!`
  } else {
    outResposta.textContent = `${numero}. Número não Perfeito!`
  }
}

btVerificar.addEventListener('click', mostrarNumeroPerfeito)