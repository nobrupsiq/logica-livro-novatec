function repetirFruta() {
  var inFruta = document.getElementById('inFruta')
  var inNumero = document.getElementById('inNumero')
  var outResposta = document.getElementById('outResposta')

  var fruta = inFruta.value;
  var numero = Number(inNumero.value);

  if((fruta == '' || numero == '') || (isNaN(numero))) {
    alert('Preencha os campos corretamente...')
    inFruta.focus();
    return;
  }

  var frutaResposta = '';

  for(var i = 1; i <= numero; i++) {
    if(i % 2 == 0) {
      frutaResposta = frutaResposta + ' * ';
    } else {
      frutaResposta = frutaResposta + fruta;
    }
  }

  outResposta.textContent = frutaResposta;

}


var btRepetirFruta = document.getElementById('btRepetirFruta');
btRepetirFruta.addEventListener('click', repetirFruta);
