let inModelo = document.getElementById('inModelo');
let inAno = document.getElementById('inAno');
let inPreco = document.getElementById('inPreco');
let outClassif = document.getElementById('outClassif');
let outPrecoVenda = document.getElementById('outPrecoVenda');
let btCalcular = document.getElementById('btCalcular');

function mostrarDados() {
  let modelo = inModelo.value;
  let ano = Number(inAno.value);
  let preco = Number(inPreco.value);

  if (modelo == '' || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
    alert('Informe corretamente os dados do veículo...');
    inModelo.focus();
    return;
  }
  // chama e atribui o retorno das funções às variáveis
  let classificacao = classificarVeiculo(ano);
  let precoVenda = calcularVenda(preco, classificacao);

  outClassif.textContent = modelo + ' - ' + classificacao;
  outPrecoVenda.textContent = `Preço de venda R$: ${precoVenda.toFixed(2)}`;
}
btCalcular.addEventListener('click', mostrarDados);

function classificarVeiculo(ano) {
  let anoAtual = new Date().getFullYear(); //obtém o ano atual
  var classif;

  if (ano == anoAtual) {
    classif = 'Novo';
  } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
    classif = 'Seminovo';
  } else {
    classif = 'Usado';
  }
  return classif; // retorna a classificação
}

// função recebe valor e status do veículo como parâmetro
function calcularVenda(valor, status) {
  var prVenda = status == 'Novo' ? valor * 1.08 : valor * 1.1;
  return prVenda;
}
