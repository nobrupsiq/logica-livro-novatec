let inData = document.getElementById('inData');
let inMulta = document.getElementById('inMulta');
let btCalcularDesconto = document.getElementById('btCalcularDesconto');
let outDataDesconto = document.getElementById('outDataDesconto');
let outValorDesconto = document.getElementById('outValorDesconto');

function calcularMulta() {
  let data = inData.value;
  let valor = Number(inMulta.value);

  if (data == '' || valor == 0 || isNaN(valor)) {
    alert('Preencha os campos corretamente...');
    inData.focus();
    return;
  }

  let dataLimite = new Date();
  let partes = data.split('-');

  dataLimite.setDate(Number(partes[2])); // Dia
  dataLimite.setMonth(Number(partes[1]) - 1); // Mês
  dataLimite.setFullYear(Number(partes[0])); // Ano

  var dia = dataLimite.getDate(); // Dia da multa

  dataLimite.setDate(dia + 90); // aumenta 90 dias na data da multa

  var dia = dataLimite.getDate();
  var mes = dataLimite.getMonth() + 1;
  var ano = dataLimite.getFullYear();

  var comDesconto = valor * 0.8;

  outDataDesconto.textContent = `Data Limite para Pagto com Desconto: ${dia < 10 ? '0' + dia : dia}/${
    mes < 10 ? '0' + mes : mes
  }/${ano}`;

  outValorDesconto.textContent = `Valor com Desconto R$: ${comDesconto.toFixed(2)}`;
}
btCalcularDesconto.addEventListener('click', calcularMulta);
