//ESCREVA UMA FUNÇAO QUE RECEBE 2 NUMEROS E RETORNE O MAIOR DELES...

function recebeNumero(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

//arrow function
const numeroMaior = (x, y) => x > y ? x : y;

console.log(recebeNumero(10, 30));
console.log(numeroMaior(100, 110));