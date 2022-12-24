// Elaborar um programa para uma pizzaria, o qual leia o valor total de
// uma conta e quantos clientes vão pagá - la.Calcule e informe o valor a ser
// pago por cliente.

// Dados de entrada
var totalConta = Number(prompt("Valor da conta R$: "))
var divisao = Number(prompt('Número de clientes: '))
// Processamento dos dados
var resultado = totalConta / divisao;
// Saida de dados
alert('Valor por cliente R$: ' + resultado.toFixed(2));
