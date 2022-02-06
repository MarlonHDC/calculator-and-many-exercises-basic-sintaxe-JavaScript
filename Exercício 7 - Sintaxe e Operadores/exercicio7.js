/* Atividade:
* Crie uma função que recebe dois números como parâmetros;
* Confira se os números são iguais;
* Confira se a soma dos números é maior que 10 ou menor que 20;
* Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua some é soma, que é maior/menos que 10 e maior/menos que 20". */ 

function comparaNumeros(num1, num2) {

    /* const saoIguais = num1 ===num2;
    const soma = num1 + num2; */

    /* if(saoIguais) {
        return "Sãi Iguais";
    }

    return "Não saõ iguais"; */

   /*  // com "if" ternário:
    return saoIguais ? "São iguais" : "Não são iguais"; */

    if (!num1 || !num2) return 'Defina dois números!';

    const primeiraFrase = crisPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function crisPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'Não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior'
    }
    if (compara20) {
        resultado20 = "maior";
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`

}
console.log(comparaNumeros(2,3));