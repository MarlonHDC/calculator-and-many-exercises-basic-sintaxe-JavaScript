// O que são vetores ou arrays

// como declarar um arrays
/* let array = ['string', 1, true];
console.log(array); */ 

// pode guardar vários tidos de dados
let array = ['string', 1, true, ['array1'],['array2'],['array3'],['array4']];
/* console.log(arrary); */

// forEach
/* arrary.forEach(function(item, index){console.log(item, index)}); */

/* array.push('new item');
console.log(array) */

// pop apaga o último item
/* array.pop();
console.log(array) */

// exclui o primeiro item do array
/* array.shift();
console.log(array) */

// adiciona um item no início do array
/* array.unshift('novo item no início')
console.log(array) */

// retorna o índice de um item do array
/* console.log(array.indexOf(true)); */

// remove ou substitui um item por um índice
/* array.splice(0, 3);
console.log(array) */

// retorna uma parte de um array já existente
/* let novoArray = array.slice(0,3);
console.log(array) */

// objetos
let object = {string: 'string', number: 1, boolean: true, arrary: ["array"], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object.objectInterno);

/* var string = object.string;
console.log(string);

// buscando valor dentro do objeto
var arrayInterno = object.array;
console.log(arrayInterno); */

// outra maneira de desestruturar
var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);