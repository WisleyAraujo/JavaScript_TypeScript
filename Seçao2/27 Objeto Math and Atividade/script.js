let numero = Number(prompt("Digite um numero"))

let numeroTitulo = document.getElementById('titulo').innerHTML = numero 
/* numeroTitulo.innerHTML = numero */
let texto = document.getElementById('texto')

texto.innerHTML = ' '
texto.innerHTML += `<p>A raiz quadra de ${numero} é ${numero ** 0.5}.</p> `
texto.innerHTML += ` <p>${numero} é inteiro : ${Number.isInteger(numero)}.</p> `


texto.innerHTML += `<p> É NaN :  ${Number.isNaN(number)}.</p>`
/* texto.innerHTML += `<p> Raiz quadrada :  ${numero ** 0.5}  </p>`
texto.innerHTML += `<p> Numero arredondado pra baixo :  ${Math.floor(numero)}  </p>`
texto.innerHTML += `<p> Numero arredondado para cima :  ${Math.ceil(numero)}  </p>`
texto.innerHTML += `<p> Numero com duas casas decimais  :  ${numero.toFixed(2)}  </p>`   */