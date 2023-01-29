let inFuncionario = document.getElementById('inFuncionario');
let btGerar = document.getElementById('btGerar');
let outEmail = document.getElementById('outEmail');

function gerarEmail() {
  let funcionario = inFuncionario.value;

  if (funcionario == '' || funcionario.indexOf(' ') == -1) {
    alert('Informe o nome completo do funcionário...');
    inFuncionario.focus();
    return;
  }

  let partes = funcionario.split(' '); // Divide o nome em itens de vetor, criados a cada ocorrência do espaço
  let email = ''; // vai concatenar letras
  let tam = partes.length; // obtém n° de itens do vetor partes

  // percorre os itens do vetor (exceto o último)...
  for (let i = 0; i < tam - 1; i++) {
    email += `${partes[i].charAt(0)}`; // obtém a letra inicial de cada item
  }
  email += `${partes[tam - 1]}@empresa.com.br`;
  outEmail.textContent = `E-mail: ${email.toLowerCase()}`;
}
btGerar.addEventListener('click', gerarEmail);
