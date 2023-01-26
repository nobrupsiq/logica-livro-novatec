// cria referência aos elementos da página
let inFruta = document.getElementById('inFruta');
let outDica = document.getElementById('outDica');
let btMontar = document.getElementById('btMontar');

function montarDica() {
  // Obtém conteúdo do campo de entrada
  var fruta = inFruta.value;

  // se vazio, exibe alerta, posiciona em inFruta e retorna
  if (fruta == '') {
    alert('Informe a fruta...');
    inFruta.focus();
    return;
  }

  let resposta = fruta.charAt(0); // letra inicial da fruta
  let estrelas = '*'; // vai concatenar *
  let tam = fruta.length; // obtém tamanho da fruta

  for (let i = 1; i < tam; i++) {
    if (fruta.charAt(i) == fruta.charAt(0)) {
      resposta += fruta.charAt(0); // adiciona a letra inicial
    } else {
      resposta += '_'; // Adiciona sublinhado
    }
    estrelas += '*'; // concatena
  }

  outDica.textContent = resposta;
  inFruta.value = estrelas;
}
btMontar.addEventListener('click', montarDica);
