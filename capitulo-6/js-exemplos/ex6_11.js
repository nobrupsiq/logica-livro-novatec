// PROGRAMA QUE EXIBE DIA, MÊS E ANO DE UMA DATA

let hoje = new Date();
let dia = hoje.getDate();
let mes = hoje.getMonth();
let ano = hoje.getFullYear();

alert(`${hoje}\nData: ${dia} / ${mes + 1} / ${ano}`);
