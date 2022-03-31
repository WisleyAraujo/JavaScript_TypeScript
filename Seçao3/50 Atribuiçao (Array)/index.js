//atribuição via  desestruturação

//... rest, ...spread
// let numero = [182, 312, 44455, 10000, 23123, 1234, 1455677, 235656767]
// const primeiroNumero = numero[0]
// let [um, , tres, ,cinco ] = numero
// console.log(um, tres, cinco);

let lista = [
    ['arroz', 'macarrao', 'feijao'],
    ['suco', 'agua', 'refrigerante'],
    ['maca', 'pera', 'banana']
]

//atribuição via desestruturação
let [listaMassa, listaBebidas, listaFrutas] = lista
console.log(listaBebidas[2]);