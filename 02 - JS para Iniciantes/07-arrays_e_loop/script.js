// Array
var videoGames = ['Switch', 'PS4', 'XBox'];
videoGames[0] // Switch
videoGames[2] // Xbox
// Acesse um elemento da array utilizando [n]


// Métodos e Propriedades de uma Array
var videoGames = ['Switch', 'PS4', 'XBox'];
videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3
// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente


// For Loop: Fazem algo repetidamente até que uma condição seja atingida.
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console


// While Loop: O for loop é o mais comum
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console


// Arrays e Loops
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}


// Break
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}


// Foreach
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente



// ##### Exercício #####

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
copa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copa.forEach((ano) => {console.log(`O brasil ganhou a copa de ${ano}`)})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var i=0; i < frutas.length; i++){
  console.log(fruta);
  if (fruta == 'Pera') {
    break
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultima_fruta = frutas[-1]


