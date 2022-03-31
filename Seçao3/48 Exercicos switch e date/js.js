const h1 = document.querySelector('.container h1');
const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short',
}
h1.innerHTML = data.toLocaleDateString()





// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDayText(diaSemana) {
//     const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
//     return [diaSemana]
// }

// function nomeMes(numeroMes) {
//     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
//         'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
//     ]
//     return [numeroMes]
// }


// function criaData(data) {
//     const diaSemana = data.getDay()
//     const numeroMes = data.getMonth()

//     const nomeDia = getDayText(diaSemana)
//     const nomeDoMes = nomeMes(numeroMes)


//     console.log(nomeDia, nomeDoMes);
//     return (
//         `${nomeDia}, ${data.getDate()} ${nomeDoMes} ` +
//         `de ${data.getFullYear()} `
//     );

// }
// h1.innerHTML = criaData(data)