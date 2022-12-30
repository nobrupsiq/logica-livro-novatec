function verificarPrimo() {
  // cria referência aos elementos da página
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  // obtem o núemero informado
  var num = Number(inNumero.value);

  // verifica se preencheu corretamente o campo inNumero
  if (num == 0 || isNaN(num)) {
    alert("Número inválido...");
    inNumero.focus();
    return;
  }

  var numDivisores = 0; // declara e inicializa contador
  var temDivisor = 0;

  // percorre todos os possíveis divisores do num
  for (var i = 2; i <= num / 2; i++) {
    // verifica se i (1, 2, 3...) é divisor do num
    if (num % i == 0) {
      temDivisor = 1; // muda o flag
      break; // sai da repetição
      // numDivisores++; // se é, incrementa contador
    }
  }

  // se num > 1 e não possui divisor
  if(num > 1 && !temDivisor) {
    outResposta.textContent = num + ' É primo';
  } else {
    outResposta.textContent = num + ' Não é primo';
  }


  //se possui apenas 2 divisores, é primo
  // if (numDivisores == 2) {
  //   outResposta.textContent = num + " É primo";
  // } else {
  //   outResposta.textContent = num + " Não é primo";
  // }
}

// referencia elemento e após associa function ao evento click
var btVerificarPrimo = document.getElementById("btVerificarPrimo");
btVerificarPrimo.addEventListener("click", verificarPrimo);
