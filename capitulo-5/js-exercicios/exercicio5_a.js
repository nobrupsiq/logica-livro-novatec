let inClube = document.getElementById("inClube");
let btAdicionar = document.getElementById("btAdicionar");
let btListar = document.getElementById("btListar");
let btMontar = document.getElementById("btMontar");
let outLista = document.getElementById("outLista")

let clubes = []; //vetor global

function adicionarClube() {
  let nomeClube = inClube.value;

  if (nomeClube == "") {
    alert("Digite o nome do clube corretamente...");
    inClube.focus();
    return;
  }

  clubes.push(nomeClube);
  inClube.value = "";
  inClube.focus();

  listarClubes();
}
btAdicionar.addEventListener("click", adicionarClube);

function listarClubes() {
  if (clubes.length == 0) {
    alert("Não há clubes a serem listados.");
    return;
  }

  let lista = "";
  for (let i = 0; i < clubes.length; i++) {
    lista += `${i + 1}. ${clubes[i]} \n`;
  }

  outLista.textContent = lista;
}
btListar.addEventListener("click", listarClubes);

function montarTabela() {
  if (clubes.length == 0) {
    alert("Não a clubes na tabela");
    return;
  }
  
  let lista = [];
  let clubesClone = clubes;

  // console.log(ultimoClube)
  if(clubes.length % 2 !== 0 || clubes.length == 0) {
    alert('Adicione mais clubes para formar a tabela!')
    inClube.focus();
    return;
  }

  for (let i = 0; i < clubesClone.length; i += 2) {
    lista.push(clubesClone.slice(i, i+2).join(' X '));
  }
  lista = lista.join('\n')

  outLista.textContent = lista;
}
btMontar.addEventListener("click", montarTabela);
