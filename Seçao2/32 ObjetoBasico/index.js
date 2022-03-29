// objeto
const indivduo = {
    nome: 'Wisley',
    sobrenome: 'Araujo',
    idade: 21,

    //criando um metodo dentro no objeto
    fala() {
        console.log(`Meu nome  é ${this.nome} e tenho ${this.idade} anos `);
    },
    incrementaIdade() {
        this.idade++
    }


}

indivduo.fala()
indivduo.incrementaIdade()
indivduo.fala()




/* funçao que cria um objeto

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}

const pessoa1 = criaPessoa('Wisley', 'Araujo', 21)
const pessoa2 = criaPessoa('Joyce', 'Silva', 28)
const pessoa3 = criaPessoa('Mateus', 'Santos', 30)

acessando valores

console.log(pessoa1.nome, pessoa2.idade)

console.log(pessoa3.sobrenome); */