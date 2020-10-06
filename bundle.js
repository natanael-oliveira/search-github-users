"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// variaveis const não podem ter seu valor reatribuidos, mas sim mutados
//operações com constantes
//percorre uma array e realiza operações sequenciais dentro dela;
// const arr = [1,3,4,5,8,9,10];
// const cont = arr.map(function(item,index){
//     return item + index;
// });
// console.log(cont);
//percorre uma array e utiliza o resultado de cada operação na operação futura;   
// const sum = arr.reduce(function(total,next){
//     return total + next;
// });
// console.log(sum);
//percorre uma array e filtra cada valor que não se encaixa na regra. obs: O retorno precisa ser do tipo boolean 
// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });
// console.log(filter);
//buscar dados percorrendo uma aray
// const find = arr.find(function(item){
//     return item === 10;
// });
// console.log(find);
//-------------------------------------------------------------------------
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
// const newArr = arr.map(item => item * 2);
// console.log(newArr);
//--------------------------------------------------------------
//valores default em functions arrows
// const soma = (a = 3,b = 6) => a +b;
// console.log(soma(1));
// console.log(soma());
//--------------------------------------------------------------
// desestruturação de dados
// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//         cidade: 'Rio do Sul',
//         estado: 'SC',
//     },
// }
// const {nome,idade,endereco:{cidade}} = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// function mostrarDadosUsuario({nome,idade,endereco:{cidade}}){
//     console.log(nome,idade,cidade);
// }
// mostrarDadosUsuario(usuario);
//--------------------------------------------------------------
//REST
// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//         cidade: 'Rio do Sul',
//         estado: 'SC',
//     },
// }
// const {nome,...resto} = usuario;
// console.log(nome,resto);
// function soma(a,b,...params){
//     return params;
// }
// console.log(soma(1,3,4,5,6));
//SPREAD
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [...arr1,...arr2];
// console.log(arr3);
var usuario1 = {
  nome: 'Diego',
  idade: 23
};

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: 'Pedro'
});

console.log(usuario2);
