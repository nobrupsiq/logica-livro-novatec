// PROGRAMA DATA DAS PARCELAS

let parcelas = Number(prompt('Quantas Parcelas? '));

let lista = ''; // irá acumular as parcelas
let dia, mes, ano, diaZero, mesZero;

let data = new Date(); // Data atual

for (let i = 0; i <= parcelas; i++) {
  data.setMonth(data.getMonth() + 1); // aumenta um mês na data
  dia = data.getDate();
  mes = data.getMonth() + 1; // Mês varia de 0 a 11, por isso, +1
  ano = data.getFullYear();

  diaZero = dia < 10 ? '0' + dia : dia; // acrescenta 0 se dia menor que 10
  mesZero = mes < 10 ? '0' + mes : mes; // acrescenta 0 se mês menor que 10

  // CONCATENA AS PARCELAS NA VARIÁVEL LINHA, COM UMA QUEBRA DE LINHA NO FINAL
  lista += `Parcela: ${diaZero} / ${mesZero} / ${ano}\n`;
}
alert(lista); // exibe as parcelas
