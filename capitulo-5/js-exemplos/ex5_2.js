// cria referência ao campo de entrada e obtém seu conteúdo
let inNumero = document.getElementById("inNumero");
// referencia espaços das saídas de dados
let outDica = document.getElementById("outDica");
let outErros = document.getElementById("outErros");
let outChances = document.getElementById("outChances");
// referencia os botões
let btApostar = document.getElementById("btApostar");
let btJogar = document.getElementById("btJogar");

// declara vetor de escopo global que irá conter os números já apostados;
let erros = [];
// Gera um número aleatório entre 1 e 100
let sorteado = Math.floor(Math.random() * 100) + 1;
// declara constante com o número de chances
const chances = 6;

function apostarNumero() {
  // referencia de entrada
  let numero = Number(inNumero.value);

  // Valida o número
  if (numero <= 0 || numero > 100 || isNaN(numero)) {
    alert("Informe um número válido...");
    inNumero.focus();
    return;
  }
  // se aposta do jogador for igual ao número sorteado
  if (numero == sorteado) {
    alert("Parabéns! Você acertou!!!");
    // troca status dos botões
    btApostar.disabled = true;
    btJogar.className = "exibe";
    outDica.textContent = `Parabéns!! Número sorteado: ${sorteado}`;
  } else {
    // se número existe no vetor erros
    if (erros.indexOf(numero) >= 0) {
      alert(`Você já apostou o número ${numero} Tente outro...`);
    } else {
      erros.push(numero); // Adiciona número ao vetor
      let numErros = erros.length; // obtém tamanho do vetor
      let numChances = chances - numErros; // calcula número de chances
      // exibe n° de erros, conteúdo do vetor e n° de chances
      outErros.textContent = `${numErros} (${erros.join(", ")})`;
      outChances.textContent = numChances;
      if (numChances == 0) {
        alert("Suas chances acabaram...");
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = `Game Over!! Número sorteado: ${sorteado}`;
      } else {
        // usa operador ternário (condicional) para mensagem da dica
        let dica = numero < sorteado ? "maior" : "menor";
        outDica.textContent = `Dica: Tente um número ${dica} que ${numero}`;
      }
    }
    // limpa campo de entrada e posiciona cursor neste campo
    inNumero.value = "";
    inNumero.focus();

    function jogarNovamente() {
      location.reload(); // recarrega a página
    }

    btJogar.addEventListener("click", jogarNovamente);
  }
}

btApostar.addEventListener("click", apostarNumero);
