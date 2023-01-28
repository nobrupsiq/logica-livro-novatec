// let palavra = 'saladas';
// let posicao1 = palavra.indexOf('a'); // retorna 1
// let posicao2 = palavra.lastIndexOf('a'); // retorna 5
// let posicao3 = palavra.indexOf('sal'); // retorna 0
// let posicao4 = palavra.indexOf('e'); // retorna -1

// console.log(posicao1);
// console.log(posicao2);
// console.log(posicao3);
// console.log(posicao4);

let inNome = document.getElementById('inNome');
let btGerar = document.getElementById('btGerar');
let outCracha = document.getElementById('outCracha');

function gerarCracha() {
  let nome = inNome.value;

  if (nome == '' || nome.indexOf(' ') == -1) {
    alert('Informe o nome completo do participante...');
    inNome.focus();
    return;
  }

  let priEspaco = nome.indexOf(' ');
  let ultEspaco = nome.lastIndexOf(' ');

  let cracha = `${nome.substring(0, priEspaco)} ${nome.substring(ultEspaco)}`;

  outCracha.textContent = `Crachá: ${cracha}`;
}
btGerar.addEventListener('click', gerarCracha);
