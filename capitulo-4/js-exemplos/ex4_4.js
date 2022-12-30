alert('Digite 0 para sair')
// inicio da repetição
do {
    var num = Number(prompt('Número: '))
    if (num == 0 || isNaN(num)) {
        // solicita confirmação do usuário
        var sair = confirm('Confirma saída?')
        if(sair) {
            // sai da repetição
            break; 
        } else {
            // volta ao início do loop
            continue;
        }
    }
    // se par, mostra o dobro; ímpar, mostra o triplo
    if(num % 2 == 0) {
        alert('O dobro de ' + num + ' é:' + num * 2);
    } else {
        alert('O triplo de ' + num + ' é: ' + num * 3);
    }
} while (true);

alert('Bye, bye...');