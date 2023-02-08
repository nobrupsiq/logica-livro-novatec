let inPreco = document.getElementById('inPreco');
let btExibir = document.getElementById('btExibir');
let outParcelas = document.getElementById('outParcelas');

btExibir.addEventListener('click', () => {
  let preco = Number(inPreco.value);
  // lista vai acumular as formas de pagamento
  let lista = '';
  // cria repetição para montas as opções de pagamento
  for (let i = 1; i <= 10; i++) {
    lista += `x de R$: ${(preco / i).toFixed(2)}\n`;
  }

  // exibe a lista no elemento outParcelas
  outParcelas.textContent = `Opções de pagamento\n\n${lista}`;
});
