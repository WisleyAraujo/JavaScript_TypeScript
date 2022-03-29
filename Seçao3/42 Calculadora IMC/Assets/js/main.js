//para o envio do formulario capturando evento submit do formulario

const formulario = document.querySelector('#formulario');


// evento previnir envio formulario
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    console.log(peso, altura);

    if (!peso) {
        Resultado('Peso Invalido', false)
        return;
    }
    if (!altura) {
        Resultado('Altura Invalida', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc})`


    Resultado(msg, true)
});


function getNivelImc(imc) {
    const level = ['Abaixo do Peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III']
    if (imc >= 39.9) return level[5]
    if (imc >= 34.9) return level[4]
    if (imc >= 29.9) return level[3]
    if (imc >= 24.9) return level[2]
    if (imc >= 18.5) return level[1]
    if (imc < 18.5) return level[0]

}

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}


function criaParagrafo() {
    const p = document.createElement('p');
    return p
}


function Resultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaParagrafo();
    if (isValid)  {
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p)

};