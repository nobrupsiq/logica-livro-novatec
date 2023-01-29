// EXPRESSÕES REGULARES

// let palavra = '#SenhA_123!';
// let vetor = palavra.match(/[a-z]/g); // e, n, h
// let vetor2 = palavra.match(/[A-Z]/g); // S, A
// let vetor3 = palavra.match(/[0-9]/g); // 1, 2, 3
// let vetor4 = palavra.match(/\W|_/g); // #,_,
// let vetor5 = palavra.match(/[T-Z]/g); // null

// console.log(vetor);
// console.log(vetor2);
// console.log(vetor3);
// console.log(vetor4);
// console.log(vetor5);

let inSenha = document.getElementById('inSenha');
let btVerificar = document.getElementById('btVerificar');

function verificarSenha() {
  // obtem o conteúdo do campo de entrada
  let senha = inSenha.value;
  let erros = []; // vetor com erros

  // verifica se o tamanho da senha é inválido
  if (senha.length < 8 || senha.length > 15) {
    erros.push('\npossuir entre 8 e 15 caracteres');
  }
  // verifica se não possui números
  if (senha.match(/[0-9]/g) == null) {
    erros.push('\npossuir números (no mínimo, 1)');
  }
  // verifica se não possui letras minúsculas
  if (!senha.match(/[a-z]/g)) {
    erros.push('\npossuir letras minúsculas (no mínimo, 1)');
  }
  // verifica se não possui letras maiúsculas ou se possui apenas 1
  if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
    erros.push('\npossuir letras maiúsculas (no mínimo, 2) ');
  }
  // se o vetor está vazio (significa que não foram encontrados erros)
  if (erros.length == 0) {
    outResposta.textContent = 'OK! Senha válida!';
  } else {
    outResposta.textContent = 'Erro... A senha deve\n ' + erros.join(',');
  }
}
btVerificar.addEventListener('click', verificarSenha);
