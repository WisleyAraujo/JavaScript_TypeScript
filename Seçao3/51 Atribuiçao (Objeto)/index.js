let pessoa = {
    nome: 'wisley',
    sobrenome: 'araujo',
    idade: '21',
    endereco: {
        setor: 's',
        casa: '11',
    }
}
//atribuiçao normal
// const nome = pessoa.nome
// console.log(nome);

//atribuição via desestruturação

// const {endereco:{ setor: r = '123', casa}, endereco} = pessoa
const {nome, ...n /*resto*/} = pessoa
console.log(nome, n);

let procuraNumero;