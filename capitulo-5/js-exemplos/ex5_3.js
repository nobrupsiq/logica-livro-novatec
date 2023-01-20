let carros = [];

function adicionarCarros() {
  let inModelo = document.getElementById('inModelo')
  let inPreco = document.getElementById('inPreco')

  let modelo = inModelo.value;
  let preco = Number(inPreco.value);

  if(modelo == '' || preco == 0 || isNaN(preco)) {
    alert('Informe corretamente os dados');
    inModelo.focus();
    return
  }

  carros.push({
    modelo: modelo,
    preco: preco,
  })

  inModelo.value = '';
  inPreco.value = '';
  inModelo.focus();

  listarCarros(); // Chamada de função que lista os carros

}
let btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarCarros)

function listarCarros() {
  if(carros.length == 0) {
    alert('Não há carros na lista')
    return;
  }
  
  let lista = ''; // para concatenar lista de carros

  // Percorre os elementos do vetor
  for(let i = 0; i < carros.length; i++) {
    // adiciona á lista, cada objeto do vetor
    lista += `${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)} \n`
  }

  // referencia elemento e altera conteúdo exibido
  document.getElementById('outLista').textContent = lista;
}
let btListar = document.getElementById('btListar')
btListar.addEventListener('click', listarCarros)

// Filtrar carros

function filtrarCarros() {
  // faz a leitura do valor máximo a partir do método prompt
  let maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar?'))

  if(maximo == 0 || isNaN(maximo)) {
    return; // ... retorna
  }

  // para concatenar lista de carros que obedecem ao critério de pesquisa / filtro

  let lista = '';

  for(let i = 0; i < carros.length; i++) {
    // verifica se o preço é inferior (ou igual) ao máximo
    if(carros[i].preco <= maximo) {
      lista += `${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)} \n`
    }
  }

  let outLista = document.getElementById('outLista')
  
  if(lista == '') {
    outLista.textContent = `Não há carros com o preço até R$ ${maximo.toFixed(2)}`
  } else {
    outLista.textContent = `Carros até R$ ${maximo.toFixed(2)} \n ------------------\n ${lista}`
  }
}
let btFiltrar = document.getElementById('btFiltrar')
btFiltrar.addEventListener('click', filtrarCarros);
