const frutas = ['pera', 'uva', 'maça', 'jaca','limão','tomate']
/* for(let i = 0; i < frutas.length; i++) {
    console.log('Indice ');
} */
//ler os indices, quando for objt ler as chaves.
for (let indice in frutas) {
    console.log(frutas[indice]);
}

console.log('=====DIVIDE=====');

const pessoa = {
    nome: 'Wisley',
    sobrenome : 'Araujo',
    idade : '21 anos'
}
for (let i in pessoa) {
    console.log(i, pessoa[i]);

}
