var inLinhas = document.getElementById('inLinhas')
var btCriar = document.getElementById('btCriar')
var outResposta = document.getElementById('outResposta')

function criarEstrelas() {
  var numerosDeEstrelas = Number(inLinhas.value)
  var estrelas = '';


  if(numerosDeEstrelas == '' || isNaN(numerosDeEstrelas)) {
    alert('Preencha o campo corretamente...')
    inLinhas.value = '';
    inLinhas.focus();
    return;
  }


  for(var i = 1; i <= numerosDeEstrelas; i++) {
    for(var x = 1; x <= i; x++) {
      estrelas += '*';
    }
    estrelas += '\n';
  }

  outResposta.textContent = estrelas;
}

btCriar.addEventListener('click', criarEstrelas)