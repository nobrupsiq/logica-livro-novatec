let anuncio = prompt('Anuncio: ');
let tamanho = anuncio.length;
let palavrasTamanho = 0;

for (let i = 0; i < tamanho; i++) {
  if (anuncio.charAt(i) == ' ') {
    palavrasTamanho++;
  }
}

alert(`Anuncio: ${anuncio}\nPalavras: ${palavrasTamanho + 1}`);
