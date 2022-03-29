/* const data = new Date(0) // function construtora
const tresHoras = 60 * 60 * 3 * 1000
console.log(data.toString(0 + tresHoras));
 */

// const data = new Date(2019, 04, 20) //  a, m, d, h,  M, s, MS

// let data = new Date('2019-04-20 20:20:59')

// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth()  + 1 ); // começa do 0 
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours()); ;
// console.log('Dia semana ', data.getDay()); // 0 domingo 6 sabado


// console.log(data.toDateString());

// console.log(Date.now());

function zeroEsquerda(num) {
    return num > 10 ? num : `0${num}`
}


function formataData(data) {
    const dia = zeroEsquerda(data.getDay())
    const mes = zeroEsquerda(data.getMonth())
    const ano = zeroEsquerda(data.getFullYear())
    return `${dia}/${mes}/${ano} `
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil);