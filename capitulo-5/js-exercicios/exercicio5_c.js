let inCandidato = document.getElementById('inCandidato');
let inAcertos = document.getElementById('inAcertos');
let outLista = document.getElementById('outLista');
let btAdicionar = document.getElementById('btAdicionar');
let btListar = document.getElementById('btListar');
let btAprovados = document.getElementById('btAprovados');

let alunos = [];

function adicionarCandidato() {
  let candidato = inCandidato.value;
  let acertos = Number(inAcertos.value);

  if (candidato == '' || acertos == 0 || isNaN(acertos)) {
    alert('Preencha os campos corretamente...');
    inCandidato.focus();
    return;
  }

  alunos.push({
    candidato: candidato,
    acertos: acertos,
  });

  inCandidato.value = '';
  inAcertos.value = '';
  inCandidato.focus();

  listarCandidatos();
}
btAdicionar.addEventListener('click', adicionarCandidato);

function listarCandidatos() {
  if (alunos.length == 0) {
    alert('Não existe alunos a serem listados!');
    inCandidato.focus();
    return;
  }

  let lista = '';

  for (let i = 0; i < alunos.length; i++) {
    lista += `${alunos[i].candidato} - ${alunos[i].acertos} acertos \n`;
  }

  outLista.textContent = lista;
}
btListar.addEventListener('click', listarCandidatos);

function aprovados() {
  if (alunos.length === 0) {
    alert('Não existem alunos na lista!');
    inCandidato.focus();
    return;
  }

  let aprovacao = Number(prompt('Número de acertos para aprovação?'));

  let lista = '';
  let alunosClone = alunos.slice();
  alunosClone
    .sort(function (a, b) {
      return a.acertos - b.acertos;
    })
    .reverse();

  for (let i = 0; i < alunosClone.length; i++) {
    if (alunosClone[i].acertos >= aprovacao) {
      lista += `${alunosClone[i].candidato} - ${alunosClone[i].acertos} acertos \n`;
    }
  }

  if (lista == '') {
    outLista.textContent = 'Não há aprovados no concurso!';
  } else {
    outLista.textContent = lista;
  }
}
btAprovados.addEventListener('click', aprovados);
