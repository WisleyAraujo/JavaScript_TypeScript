//criar variável de controle, condição para parar o laço, variável incremento
// i == index
for (let i = 0; i <= 10; i++) {
    console.log(`Linha ${i}`);
}

console.log('------------------------------');



for (let i = 0; i <= 10; i++) {

    const par = i % 2 === 0 ? 'par' : 'impar' //operador ternário
    console.log(i, par);
}

console.log('------------------------------');

const frutas = ['banana', 'pera', 'uva']
//console.log(frutas.length);
//console.log(frutas[1]);

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}