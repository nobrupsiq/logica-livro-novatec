// Uso de arguments para obtervalores passados à função
// Arguments é um vetor
function calcularMedia() {
  if (arguments.length == 0) {
    alert('Informe, no mínimo, uma nota'); // se não foram passados argumentos
    return;
  }

  let soma = 0; // vai acumular a soma das notas
  let numNotas = arguments.length; // obtém a quantidade de argumentos

  for (let i = 0; i < numNotas; i++) {
    soma += arguments[i]; // soma o valor dos argumentos
  }

  let media = soma / numNotas; // calcula a média
  alert(`Média das notas: ${media.toFixed(1)}`);
}

// Funções com retorno de valor
let outResposta = document.getElementById('outResposta');

function obterSituacao(nota, media) {
  let situacao = nota >= media ? 'Aprovado' : 'Reprovado';
  return situacao;
}
let resposta = obterSituacao(prova1, 7);
outResposta.textContent = 'Situação: ' + resposta;
