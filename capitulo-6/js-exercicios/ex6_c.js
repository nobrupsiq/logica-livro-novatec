let inFrase = document.getElementById('inFrase');
let btVerificar = document.getElementById('btVerificar');
let outResposta = document.getElementById('outResposta');

function verificar() {
  let frase = inFrase.value;

  if (frase == '' || frase.indexOf(' ') == -1) {
    alert('Informe uma frase');
    inFrase.focus();
    return;
  }
  // vai tirar os espaços em branco da frase digitada
  let frase2 = frase.replace(/ /g, '');
  let tamanho = frase2.length;

  let iguais = true; // flag
  // vai verificar até a metade e comparar as primeiras letras com as ultimas
  for (let i = 0; i < tamanho / 2; i++) {
    // verifica se a primeira letra é diferente da última
    if (frase2[i] != frase2[tamanho - 1 - i]) {
      iguais = false;
      break;
    }
  }

  if (iguais) {
    outResposta.textContent = `${frase.toUpperCase()} é um Palíndromo`;
  } else {
    outResposta.textContent = `${frase.toUpperCase()} Não é um Palíndromo`;
  }
}
btVerificar.addEventListener('click', verificar);
