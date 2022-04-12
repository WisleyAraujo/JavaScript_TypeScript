const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 3'},
    {tag: 'footer', texto: 'frase 4'}
]


const container = document.querySelector('.container')
const div = document.createElement('div')

    
for(let i = 0; i < elementos.length; i++) {
   let {tag, texto} = elementos[i]
    let criaTag =  document.createElement(tag)
    criaTag.innerText = texto
    //let textoCriado = document.createTextNode('')
    // tagCriada.appendChild(TextoCriado)
    div.appendChild(criaTag)
}

container.appendChild(div)