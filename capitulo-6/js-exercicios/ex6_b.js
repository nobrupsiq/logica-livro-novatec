let inNome = document.getElementById('inNome');
let btGerar = document.getElementById('btGerar');
let outResposta = document.getElementById('outResposta');

function gerarNome() {
  let nome = inNome.value;

  if (nome == '' || nome.indexOf(' ') == -1) {
    alert('Digite o nome completo...');
    inNome.focus();
    return;
  }

  let partes = nome.split(' ');
  let tamanho = partes.length;
  let resposta = '';

  for (let i = 0; i < tamanho - 1; i++) {
    resposta += `${partes[i].charAt(0)}.`;
  }
  resposta = `Citação bibliográfica: ${partes[tamanho - 1]}, ${resposta}`;

  outResposta.textContent = resposta;
}
btGerar.addEventListener('click', gerarNome);
