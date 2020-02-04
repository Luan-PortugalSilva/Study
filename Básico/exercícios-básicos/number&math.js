const number = Number(prompt("Digite um numero"))
const divClass = document.getElementById("numero")
let texto = document.getElementById('texto')

divClass.innerHTML = number
texto.innerHTML = ''
texto.innerHTML += `<p> Raiz quadrada: ${Math.sqrt(number)}</p>`
texto.innerHTML += `<p> ${number} é inteiro: ${Number.isInteger(number)}</p>`
texto.innerHTML += `<p> É NaN: ${isNaN(number)}</p>`
texto.innerHTML += `<p> Arredondado para baixo: ${Math.floor(number)}</p>`
texto.innerHTML += `<p> Arredondado para cima: ${Math.ceil(number)}</p>`
texto.innerHTML += `<p> Com duas casa decimais: ${number.toFixed(2)}</p>`

