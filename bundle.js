"use strict";

// variaveis const não podem ter seu valor reatribuidos, mas sim mutados
//operações com constantes
//percorre uma array e realiza operações sequenciais dentro dela;
var arr = [1, 3, 4, 5, 8, 9, 10];
var cont = arr.map(function (item, index) {
  return item + index;
}); // console.log(cont);
//percorre uma array e utiliza o resultado de cada operação na operação futura;   

var sum = arr.reduce(function (total, next) {
  return total + next;
}); // console.log(sum);
//percorre uma array e filtra cada valor que não se encaixa na regra. obs: O retorno precisa ser do tipo boolean 

var filter = arr.filter(function (item) {
  return item % 2 === 0;
}); // console.log(filter);
//buscar dados percorrendo uma aray

var find = arr.find(function (item) {
  return item === 10;
});
console.log(find); //-------------------------------------------------------------------------
//funções anôninas "Arrow Functions"
//forma utilizada normalmente
// const newArr = arr.map((item) => {
//     return item * 2;
// });
//quando só passa um parâmetro
// const newArr = arr.map(item => {
//     return item * 2;
// });
//quando retorna simplesmente uma informação

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
