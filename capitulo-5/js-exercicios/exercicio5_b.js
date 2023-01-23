let inNumero = document.getElementById('inNumero');
let btAdicionar = document.getElementById('btAdicionar');
let btVerificar = document.getElementById('btVerificar');
let outNumero = document.getElementById('outNumero');
let outAlerta = document.getElementById('outAlerta');

let numeroVet = []; // Vetor global

function verificarNumero() {
  let numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert('Preencha os campos corretamente...');
    inNumero.focus();
    return;
  }

  numeroVet.push(numero);
  let lista = '';

  for (let i = 0; i < numeroVet.length; i++) {
    lista += `Número: ${numeroVet[i]} \n`;
  }

  outNumero.textContent = lista;
}
btAdicionar.addEventListener('click', verificarNumero);
