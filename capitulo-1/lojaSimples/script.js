// Elaborar um programa para uma loja, o qual leia o preço de um produto e
// informe as opções de pagamento da loja.Calcule e informe o valor para
// pagamento à vista com 10 % de desconto e o valor em 3x.

// Dados de entrada
var preco = Number(prompt('Preço do produto R$: '))
// Processamento dos dados
var aVista = preco - (0.10 * preco)
var parcelado = preco / 3;
// Apresentando a saída dos dados
alert('Preço R$: ' + preco + '\nÀ Vista: R$: ' + aVista + '\nOu 3x de R$: ' + parcelado)
