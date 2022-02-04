/* var jogador1 = 0;
var jogador2 = 1;
var placar; */

// if ternário
/* jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') :
console.log('Jogadores Inválidos'); */

// usando if
/* if (jogador1  != -1) {
}
if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
}else if (jogador2 > 0) {
    console.log('jogador 2 marcou ponto!');
}else {
    console.log('ninguém marcou ponto!');
} */

// switch case
/* switch (placar) {
    case placar = jogador1 > jogador2: 
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou')
}
 */

// ESTRUTURAS DE REPETIÇÃO:

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];

let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', }


// For - executa uma instrução até que ela seja falsa
/* for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
} */

// for/in executa repetição a partir de uma propriedade
/* for (let i in array) {
    console.log(i);
}
 */
// com object
/* for (i in object) {
    console.log(i)
} */

// for/of - executa repetição a partir de valor
/* for (i of array) {
    console.log(i)
}

// com object não dá para usar
for (i of object.propriedade1) {
    console.log(i);
}
 */
// while (antes da execução)
var a = 0;

/* while (a < 10 ) {
    a++;
    console.log(a);
} */

// do while (até que... depois da execução)

do {
    a++;
    console.log(a);

} while (a < 10);

