function mostraHora() {
    let data = new Date()
    return data.toLocaleTimeString('pt-BR')

}

console.log(mostraHora());


function funcaoIntervalo(params) {
    console.log(mostraHora());

}



//intervalo de tempo
const timer = setInterval(() => {
    console.log(mostraHora());

}, 1000);

setInterval(() => {
    clearInterval(timer);
}, 3000);