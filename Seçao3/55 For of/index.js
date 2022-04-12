const nome = 'Wisley araujo'

// for classico - geralmente com iteráveis (array/string)
//for in - retorna o indice ou chace(string, array, objtos)
// for of - retorna o valor em si (iteráveis, array, strings.)


for (let i in nome) {
    console.log(i);
}

console.log('=====DIVIDE====');

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('=====DIVIDE====');


for (let valor of nome) {
    console.log(valor);
}

console.log('=====DIVIDE====');