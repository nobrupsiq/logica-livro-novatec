let inNome = document.getElementById('inNome');
let btGerar = document.getElementById('btGerar');
let outLista = document.getElementById('outLista');

function gerarCracha() {
  let nome = inNome.value;

  if (nome == '') {
    alert('Preencha o campo corretamente!');
    inNome.focus();
    return;
  }

  let priEspaco = nome.indexOf(' ');
  let ultEspaco = nome.lastIndexOf(' ');

  let cracha = nome.substring(0, priEspaco) + nome.substring(ultEspaco);

  outLista.textContent = `Crachá: ${cracha}`;
}
btGerar.addEventListener('click', gerarCracha);
