// PROGRAMA CAIXA DE LOJA

// cria referência ao elementos da página
let inDataVenc = document.getElementById('inDataVenc');
let inValor = document.getElementById('inValor');
let outMulta = document.getElementById('outMulta');
let outJuros = document.getElementById('outJuros');
let outTotal = document.getElementById('outTotal');
let btCalcular = document.getElementById('btCalcular');
let btNovaConta = document.getElementById('btNovaConta');

const taxa_multa = 2 / 100; // multa por atraso
const taxa_juros = 0.33 / 100; // juros por dia de atraso

function calcularMultaJuros() {
  // obtém os conteúdos dos campos de entrada
  let dataVenc = inDataVenc.value;
  let valor = Number(inValor.value);

  if (dataVenc == '' || valor == 0 || isNaN(valor)) {
    alert('Informe corretamente os dados da conta...');
    inDataVenc.focus();
    return;
  }

  // cria duas variáveis (instancia dois objetos) tipo data
  let hoje = new Date();
  let vencto = new Date();

  // A data vem no formato aaaa-mm-dd
  let partes = dataVenc.split('-');
  vencto.setFullYear(Number(partes[0])); // Ano
  vencto.setMonth(Number(partes[1]) - 1); // Mês
  vencto.setDate(Number(partes[2])); // Dia
  console.log(partes);

  // calcula a diferença de dias entre as datas (em milesegundos)
  let atraso = hoje - vencto;
  let multa = 0; // inicializa multa e juros com 0
  let juros = 0;

  // se conta estiver em atraso
  if (atraso > 0) {
    // converte os milesegundos da diferença em dias
    // (1 dia = 24hor x 60min x 1000mseg: 86400000)
    // round(): necessário para períodos envolvendo horário de verão
    let dias = Math.round(atraso / 86400000);

    multa = valor * taxa_multa; // calcula multa e juros
    juros = valor * taxa_juros * dias;
  }

  let total = valor + multa + juros; // calcula o total

  outMulta.value = multa.toFixed(2); // exibe os valores com 2 decimais
  outJuros.value = juros.toFixed(2);
  outTotal.value = total.toFixed(2);
}
btCalcular.addEventListener('click', calcularMultaJuros);

function limparCampos() {
  location.reload();
}
btNovaConta.addEventListener('click', limparCampos);
