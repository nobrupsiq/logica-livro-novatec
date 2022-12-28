function verificarLados() {
  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoC = document.getElementById("inLadoC");
  var outTitulo = document.getElementById("outTitulo");
  var outTipo = document.getElementById("outTipo");

  var ladoA = Number(inLadoA.value);
  var ladoB = Number(inLadoB.value);
  var ladoC = Number(inLadoC.value);

  if ((ladoA == "" || ladoB == "" || ladoC == "") || isNaN(ladoA, ladoB, ladoC)) {
    alert("Digite um valor válido e preencha todos os campos!");
    inLadoA.focus();
    return;
  }

  if ((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)) {
    outTitulo.textContent = "Lados não podem formar um triangulo";
    inLadoA.focus();
  } else if (ladoA == ladoB && ladoA == ladoC) {
    outTitulo.textContent = "Lados podem formar um triangulo";
    outTipo.textContent = "Tipo: Equilátero";
  } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
    outTitulo.textContent = "Lados podem formar um triangulo";
    outTipo.textContent = "Tipo: Isósceles";
  }

  if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
    outTitulo.textContent = "Lados podem formar um triangulo";
    outTipo.textContent = "Tipo: Escaleno";
  }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarLados);
