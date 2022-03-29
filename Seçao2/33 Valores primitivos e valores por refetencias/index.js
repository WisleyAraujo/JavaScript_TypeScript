/* 
    primitivos (imutáveis) - sting, number, boolean, undefined, null (bigint, symbol ) - valores copiados

    referencia (mutavel) - array, object, function - valores passados por referencia
*/


/* let a = [1,2,3];
let b = a 
console.log (a, b)

a.push(4)
console.log (a, b)

b.pop()
console.log(a, b); */

const a = {
    nome : 'wisley',
    sobrenome : 'Araujo'
}

const b = {...a} // spreed 
//const b = a aponta o valor por referencia
console.log(a ,b);

a.nome = 'mateus'
console.log(a , b);