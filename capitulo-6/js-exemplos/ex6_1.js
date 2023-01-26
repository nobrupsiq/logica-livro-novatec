var anuncio = prompt('Anúncio: '); // Lê o anuncio
var tam = anuncio.length; // obtém o tamanho
var numPalavras = 0; // inicializa o contador

// Percorre os caracteres do anúncio
for (let i = 0; i < tam; i++) {
  if (anuncio.charAt(i) == ' ') {
    numPalavras++; // incrementa contador
  }
}

// exibe anuncio e número de palavras ( que é o n° de espaços + 1)
alert(`Anúncio: ${anuncio} \nN° Palavras: ${numPalavras + 1}`);
