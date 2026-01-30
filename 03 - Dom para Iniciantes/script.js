console.log('##### Aula 01 - O que é o DOM #####');
/* 
##### Document Object Model (DOM) #####

É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
*/

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

console.log(window.innerHeight); // retorna a altura do browser
console.log(window.innerWidth); // retorna a largura do browser


/*
##### Window e Document #####

São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.
*/

// window.alert('Isso é um alerta');
// alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

// window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.


/*
##### Node #####

Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.
*/

const titulo = document.querySelector('h1');
function callback(){
  console.log('Click');
}

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo


console.log('##### Exercício #####')

// Retorne o url da página atual utilizando o objeto window
console.log(window.URL)

// Seleciona o primeiro elemento da página que possua a classe ativo
console.log(document.getElementsByClassName('ativo')[0]);

// Retorne a linguagem do navegador
console.log(navigator.language);

// Retorne a largura da janela 
console.log(window.innerWidth);



console.log('')
console.log('##### Aula 02 - Seleção de Elementos #####')
/* 
ID
getElementById seleciona e retorna elementos do DOM
*/

// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');


// Classe e Tag
// getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);


/*
Seletor Geral Único

querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

Diferente do getElementsByClassName, a lista aqui é estática
*/

const animais = document.querySelector('.animais');
const contato2 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

console.log(navItem)


/*
HTMLCollection vs NodeList
A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.
*/

const titulo2 = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

/*
Array-Like
HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)
*/
const gridSection2 = document.querySelectorAll('.grid-section');

gridSection2.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});

console.log('##### Exercício #####')
/*
// Retorne no console todas as paragrafos (p) do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensIniciamImagem = document.querySelectorAll('img[src^="imagem"]');
console.log(imagensIniciamImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
const ultimoParagrafo = document.querySelectorAll('p');
console.log(ultimoParagrafo[ultimoParagrafo.length - 1]);

*/

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);
console.log(paragrafos[paragrafos.length - 1]);




console.log('')
console.log('##### Aula 03 - forEach e Arrow Function #####');

/*
forEach
Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
*/

const paragrafos2 = document.querySelectorAll('p');
paragrafos2.forEach(function(item){
  console.log(item);
});

/*
Parâmetros do forEach
O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;
*/

paragrafos.forEach(function(valorAtual, index, array){
  console.log(valorAtual); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

/*
forEach e Array
forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.
*/

const paragrafosArray = Array.from(paragrafos);

paragrafosArray.forEach(function(item){
  console.log(item);
});


/*
Arrow Function
Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
*/

paragrafos.forEach((item) => {
  console.log(item);
});

/*
Parâmetros e Parênteses
*/

// parâmetro único não precisa de parênteses
paragrafos.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
paragrafos.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
paragrafos.forEach(() => {
  console.log(i++);
});

//É melhor utilizar os parênteses


/*
Return
É possível omitir as chaves {} para uma função que retorna uma linha.
*/

paragrafos.forEach(item => 
  console.log(item)
);

paragrafos.forEach(item => console.log(item));

// Não é permitido fechar a linha com ;

console.log('##### Exercício #####')

// Mostre no console cada parágrado do site

// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:

/*
const imgs = document.querySelectorAll('img');

paragrafos.forEach(item, index => {
  console.log(item, index)
})

let i = 0;
paragrafos.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);
*/

