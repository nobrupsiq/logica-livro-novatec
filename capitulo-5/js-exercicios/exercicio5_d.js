// Dados de entrada
let inNoticia = document.getElementById('inNoticia');
let btAdicionar = document.getElementById('btAdicionar');
let btListar = document.getElementById('btListar');
let outNoticiasCadastradas = document.getElementById('outNoticiasCadastradas');
let outUltimasNoticias = document.getElementById('outUltimasNoticias');
let outListaNoticias = document.getElementById('outListaNoticias');

let noticiasGlobal = []; // VETOR GLOBAL

function adicionarNoticias() {
  //Pegando o valor que o usuário digitar no input
  let noticia = inNoticia.value;

  // Verificando se o usuario deixou o campo em branco
  if (noticia == '') {
    alert('Escreva alguma notícia...');
    inNoticia.focus();
    return;
  }

  noticiasGlobal.push(noticia); // Jogando a notícia que o usuário digitou dentro do vetor

  let lista = ''; // Lista para concatenar a resposta

  // Loop padrão
  for (let i = 0; i < noticiasGlobal.length; i++) {
    lista = `Número de notícias cadastradas: ${i + 1}`; // +1 porque o index do vetor inicia em 0
  }

  // Após o usuario clicar em Adicionar, o campo do input é limpo e o foco é voltado para o mesmo.
  inNoticia.value = '';
  inNoticia.focus();

  // Saída de dados
  outNoticiasCadastradas.textContent = lista;
}
// Adicionando evento de click ao botão que irá executar a função ao ser clicado pelo usuário
btAdicionar.addEventListener('click', adicionarNoticias);

function listarNoticias() {
  // Verificando se o vetor está vazio. Se vazio, irá disparar um alerta dizendo que não há dados e em seguida o foco retorna para o input
  if (noticiasGlobal.length == 0) {
    alert('Não existem notícias a serem listadas!');
    inNoticia.focus();
    return;
  }

  // Perguntando ao usuário a quantidade de notícias que ele deseja ler
  let nNoticias = Number(prompt('Digite a quantidade de notícias atualizadas que deseja ler: '));

  // Armazenando o tamanho do meu vetor na variável
  let nCadastradas = noticiasGlobal.length;

  // Verificando se o número de notícias que o usuário deseja ler é maior que as notícias existentes no programa
  if (nNoticias == 0 || isNaN(nNoticias) || nNoticias > noticiasGlobal.length) {
    alert('Escolha um número menor ou igual ao de notícias cadastradas!');
    return;
  }

  // Variável para armazenar as últimas notícias
  let ultimasNoticias = `${nNoticias} Última(s) notícia(s) \n -------------------------- \n`;

  for (let i = nCadastradas - 1; i >= nCadastradas - nNoticias; i--) {
    ultimasNoticias += `${i + 1}°) ${noticiasGlobal[i]} \n`;
  }

  outNoticiasCadastradas.textContent = `Notícias cadastradas: ${nCadastradas}`;
  outUltimasNoticias.textContent = ultimasNoticias;
}
btListar.addEventListener('click', listarNoticias);
