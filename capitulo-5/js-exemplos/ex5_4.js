let criancas = []; // vetor global

function adicionarCrianca() {
  let inNome = document.getElementById("inNome");
  let inIdade = document.getElementById("inIdade");

  let nome = inNome.value;
  let idade = Number(inIdade.value);

  if (nome == "" || inIdade.value == "" || isNaN(idade)) {
    alert("Informe corretamente os dados");
    inNome.focus();
    return;
  }

  // adiciona dados ao vetor de objetos
  criancas.push({
    nome: nome,
    idade: idade,
  });

  inNome.value = "";
  inIdade.value = "";
  inNome.focus();

  listarCriancas();
}
let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCrianca);

// listar crianças

function listarCriancas() {
  if (criancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }

  let lista = "";

  // percorre os elementos do vetor
  for (let i = 0; i < criancas.length; i++) {
    lista += `${criancas[i].nome} - ${criancas[i].idade} Anos \n`;
  }
  //exibe a lista(em uma única instrução)
  document.getElementById("outLista").textContent = lista;
}
let btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCriancas);

// Resumir lista

function resumirLista() {
  //verifica se vetor está vazio
  if (criancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }

  // cria uma cópia do vetor crianças
  let copia = criancas.slice();

  // ordena o vetor copia pela idade
  copia.sort(function (a, b) {
    return a.idade - b.idade;
  });

  let resumo = ""; // para concatenar saída

  let aux = copia[0].idade; // menor idade do vetor ordenado
  let nomes = []; // vetor para inserir nomes de cada idade

  // percorre os elementos do vetor (classificado por idade)
  for (let i = 0; i < copia.length; i++) {
    // se é da mesma idade auxiliar, adiciona ao vetor
    if (copia[i].idade == aux) {
      nomes.push(copia[i].nome);
    } else {
      // senão, adiciona ao resumo, dados e nomes inseridos em nomes[]
      resumo += `${aux} Ano(s): ${nomes.length} criança(s) - `;
      resumo += (nomes.length / copia.length * 100).toFixed(2) + '%\n';
      resumo += `(${nomes.join(", ")}) \n\n`;
      aux = copia[i].idade; //obtém a nova idade na ordem
      nomes = []; // limpa o vetor dos nomes
      nomes.push(copia[i].nome); // adiciona o primeiro da nova idade
    }
  }

  // adiciona os nomes da última idade ordenada
  resumo += `${aux} ano(s): ${nomes.length} criança(s) - `;
  resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
  resumo += `(${nomes.join(", ")}) \n\n`;

  // altera o conteúdo de outLista
  document.getElementById("outLista").textContent = resumo;
}
let btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click", resumirLista);
