let inNumero = document.getElementById('inNumero');
let btAdicionar = document.getElementById('btAdicionar');
let btVerificar = document.getElementById('btVerificar');
let outNumero = document.getElementById('outNumero');
let outAlerta = document.getElementById('outAlerta');
let btLimpar = document.getElementById('btLimpar');

let numeroVet = []; // Vetor global

function adicionarNumero() {
  let numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert('Preencha os campos corretamente...');
    inNumero.focus();
    return;
  }

  numeroVet.push(numero);
  let lista = 'Números: ';

  for (let i = 0; i < numeroVet.length; i++) {
    lista += `${numeroVet[i]} `;
  }
  outNumero.textContent = lista;

  inNumero.value = '';
  inNumero.focus();
}
btAdicionar.addEventListener('click', adicionarNumero);

function verificarOrdem() {
  let checarOrdem = true; // flag

  for (let i = 0; i < numeroVet.length; i++) {
    // se o numero atual do vetor for MAIOR que o PROXIMO número, a flag é alterada para false e o loop é paralizado.
    if (numeroVet[i] > numeroVet[i + 1]) {
      checarOrdem = false;
      break;
    }
  }
  if (checarOrdem) {
    alert('Números em ordem crescente!');
    inNumero.focus();
  } else {
    alert('Números não estão em ordem crescente!');
    inNumero.focus();
  }
}
btVerificar.addEventListener('click', verificarOrdem);

function limpar() {
  window.location.reload();
}
btLimpar.addEventListener('click', limpar);
