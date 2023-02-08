// função recebe 2 parâmetros: nota e media

function exibirSituação(nota, media) {
  if (nota >= media) {
    // compara o valor das variáveis
    alert('Aprovado!');
  } else {
    alert('Reprovado!');
  }
}
let prova1 = Number(prompt('Qual a nota: ')); // Lê a nota
exibirSituação(prova1, 7);
