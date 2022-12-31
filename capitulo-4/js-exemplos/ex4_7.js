function preencherEstrelas() {
  // cria referência aos elementos html manipulados pela function
  var inNumero = document.getElementById('inNumero');
  var outEspacos = document.getElementById('outEspacos');

  // obtem conteudo do campo inNumero
  var num = Number(inNumero.value)

  if(num == 0 || isNaN(num)) {
    alert('Número inválido...')
    inNumero.focus();
    return;
  }

  // declara variável que irá concatenar as estrelas/espaços
  var estrelas = '';

  // cria laço de repetição de 1 até o número informado
  for (var i = 1; i <= num; i++) {
    if(i % 2 == 1) {
      estrelas = estrelas + '*' // na posição ímpar do i: *
    } else {
      estrelas = estrelas + '-'; // na posição par: -
    }
  }
  outEspacos.textContent = estrelas; // exibe as estrelas
}

// cria referência ao botão e após associa function ao evento click
var btPreencher = document.getElementById('btPreencher');
btPreencher.addEventListener('click', preencherEstrelas);