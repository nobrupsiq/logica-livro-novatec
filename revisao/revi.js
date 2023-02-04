let inNome = document.getElementById('inNome');
let btGerar = document.getElementById('btGerar');
let outLista = document.getElementById('outLista');

function gerarEmail() {
  let funcionario = inNome.value;
  // verificação se o usuario deixou o input vazio, ou se o nome nao contém espaços. Se o nome não tem espaço, ele não é um nome completo.
  if (funcionario == '' || funcionario.indexOf(' ') == -1) {
    alert('Informe o nome completo do funcionario!');
    inNome.focus();
    return;
  }

  // partes vai quebrar o nome onde contém espaços e transformar em um array
  let partes = funcionario.split(' ');
  let email = '';
  let tamanho = partes.length;

  // ta fazendo um loop pelo array e ta pegando as iniciais do nome, menos a do ultimo por isso que o tamanho está como -1 no loop
  for (let i = 0; i < tamanho - 1; i++) {
    email += partes[i].charAt(0);
  }

  // ta concatenando as letras iniciais com a última parte do nome que ficou de fora no loop
  email += partes[tamanho - 1] + '@empresa.com.br';

  outLista.textContent = 'Email: ' + email.toLowerCase();
}
btGerar.addEventListener('click', gerarEmail);
