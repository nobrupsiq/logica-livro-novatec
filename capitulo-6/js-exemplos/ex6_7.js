// const senha = 'ABACAD';

// const senha1 = senha.replace('A', 'X'); // XBACAD
// const senha2 = senha.replace(/A/g, 'X'); // XBXCXD

// let app = 'App controle financeiro';
// let app2 = app.replace(' ', '');
// let app3 = app.replace(/ /g, '').toLowerCase();
// console.log(app3);

let hoje = new Date();
let amanha = new Date();

let dia = amanha.getDate();
let mes = hoje.getMonth();
hoje.setMonth(mes);
console.log(hoje);

alert(`Hoje: ${hoje} \nAmanhã: ${amanha}`);
