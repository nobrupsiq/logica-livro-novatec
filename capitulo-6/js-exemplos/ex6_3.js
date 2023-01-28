// PALAVRA INVERTIDA

// let palavra = prompt('Digite a palavra: '); // lê a palavra
let palavra = 'teste';
let tamanho = palavra.length; // obtém o tamanho

// inverso inicia com a última letra da palavra em caixa alta
// aqui ele retorna a ultima letra na variavel inverso
let inverso = palavra.charAt(tamanho - 1).toUpperCase();

// for decrescente percorre as demais letras e...
// -2 porque a variavel inverso ja retorna a ultima, então o loop deve ser iniciado da penultima letra e vai decrescendo.
for (let i = tamanho - 2; i >= 0; i--) {
  inverso += palavra.charAt(i).toLocaleLowerCase(); // converte-as em caixa baixa
}

// exibe a palavra original invertida
// alert(`Palavra: ${palavra} \nInvertida: ${inverso}`);

// COPIA DE CARACTERES DA STRING

let palavra2 = 'Saladas';
let copia1 = palavra2.substring(2);
let copia2 = palavra2.substring(2, 4); // omiti uma letra
let copia3 = palavra2.substring(0, palavra2.length - 1);
let copia4 = palavra2.substring(palavra2.length - 2);

// console.log(copia1);
// console.log(copia2);
// console.log(copia3);
// console.log(copia4);

// para obter o último caractere de uma string, podemos utilizar um dos seguintes métodos

var ultima1 = palavra2.substring(-1); // NÃO FUNCIONA
var ultima2 = palavra2.charAt(palavra2.length - 1);
