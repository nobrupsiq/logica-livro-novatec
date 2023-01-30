// PROGRAMA QUE CALCULA ANO DE NASCIMENTO DE UMA PESSOA
let anoAtual = new Date().getFullYear();
let idade = prompt(`Quantos anos você comemora em ${anoAtual} ?`);
let anoNasc = anoAtual - idade;
alert(`Ahh... Então você nasceu em ${anoNasc}`);
