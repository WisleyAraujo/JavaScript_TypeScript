//protegendo as variaveis
function meuEscobo() {
    //recuperando o formulario
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = []

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        /* recuperando valores
        const recupera = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        } */
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        resultado.innerHTML += ` ${nome.value} ${sobrenome.value} tem ${peso.value}KG
         é ${altura.value}cm`
        console.log(pessoas);

    }
    form.addEventListener('submit', recebeEventoForm)

}




meuEscobo();

