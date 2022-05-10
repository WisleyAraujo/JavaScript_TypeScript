// tratando erros
/* try {
    console.log(naoExisto);
} catch (error) {
    console.log('varivael nao definida');
    console.log(error);
} */


console.log('#####################################################');
try {
    //executada quando nao ha erros
    console.log(a);
    console.log('Abrindo um arquivo');
    console.log('Manipulei o arquivo');
    console.log('Fechei o arquivo');
} catch (e) {
    //executado quando tem erros
    console.log('Tratando o error');
} finally {
    //sempre
    console.log('FINALLY: Sempre sou executado');
}
console.log('#####################################################');

function soma(x, y) {
    //lançando erro
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numero')
    }
    return x + y
}
//capturando error
try {
    console.log(soma(1, 7));
    console.log(soma('1', 7));
} catch (e) {
    // console.log(e);
    console.log('Algo mais amigável');
}

console.log('###################DATA##################################');

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date')
    }
    if (!data) {
        data = new Date();
    }
    //objeto
    return data.toLocaleTimeString('pt-BR', {
        // hour: '2-digit',
        // minute:'2-digit',
        // second:'2-digit',
        // hour12:'2-digit',
    })
}


try {
    const data = new Date();
    const hora = retornaHora(a)
    console.log(hora);
} catch (e) {
    //tratar erro
}finally{
    console.log('have a nice day');
}