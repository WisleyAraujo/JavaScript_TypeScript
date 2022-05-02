/* Escreva uma Funçao que recebe um numero e retorne o seguinte:
    Numero é divisível por 3 = FIZZ
    Numero divisível por 5 = BUZZ
    numero divisível por 3 e 5 = FIZZBUZZ
    numero NAO e divisível por 3 e 5 = Retorna o próprio numero
    chegar se o numero e realmente um numero = Retorna o próprio numero
    use a funçao com numeros de 0-100
*/

function FizzBuzz(numero) {
    if (typeof numero !== 'number') return 'NAO É UM NUMERO'
    if (numero % 3 === 0 && numero % 5 === 0) return 'FIZZBUZZ'
    if (numero % 3 === 0) return 'FIZZ'
    if (numero % 5 === 0) return 'BUZZ'

    return 'nao divide'
}
for (let i = 0; i <= 100; i++){
    console.log(i, FizzBuzz(i));
}