let inMensagem = document.getElementById('inMensagem');
let btCriptografar = document.getElementById('btCriptografar');
let btDecriptografar = document.getElementById('btDecriptografar');
let outMensagem = document.getElementById('outMensagem');

function criptografar() {
  let mensagem = inMensagem.value;

  if (mensagem == '') {
    alert('Preencha o campo corretamente!');
    inMensagem.focus();
    return;
  }

  let resposta = '';
  let tamanho = mensagem.length;

  // laço posição impar
  for (let i = 1; i < tamanho; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  // laço posição par
  for (let i = 0; i < tamanho; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  outMensagem.textContent = resposta;
}
btCriptografar.addEventListener('click', criptografar);

function decriptografar() {
  let mensagem = inMensagem.value;

  if (mensagem == '') {
    alert('Preencha o campo corretamente!');
    inMensagem.focus();
    return;
  }

  let tamanho = mensagem.length;
  let metade = Math.floor(tamanho / 2);
  var resposta = '';

  if (tamanho % 2 == 0) {
    for (var i = metade; i < tamanho; i++) {
      resposta += mensagem.charAt(i);
      resposta += mensagem.charAt(i - metade);
    }
  } else {
    for (var i = metade; i < tamanho - 1; i++) {
      resposta += mensagem.charAt(i);
      resposta += mensagem.charAt(i - metade);
    }
    resposta += mensagem.charAt(i);
  }
  outMensagem.textContent = resposta;
}
btDecriptografar.addEventListener('click', decriptografar);
