//               01234567

let umaString = 'Um texto'
console.log(umaString[4])
console.log(umaString.charAt(6))
console.log(umaString.charCodeAt(6)) // pega a letra em código da tabela ASC
console.log(umaString.concat(' em um lindo.'))
console.log(umaString + ' em um lindo dia')
console.log(`${umaString} em um lindo dia.`)

console.log(umaString.indexOf('texto')) // diz em qual índice a palavra começa
console.log(umaString.lastIndexOf('o')) // começa de trás para frente.

console.log(umaString.match(/[a-z]/g)) // ele encontra um array
console.log(umaString.search(/[a-z]/g)) // sempre retorna o índice.
console.log(umaString.replace('Um', 'Outra')) // substitui uma palavra ou letra por outra
console.log(umaString.length) // retorna o numero de índice

console.log(umaString.slice(2, 5)) // pega o indice inicial até o final, retornando a letra ou a palavra
console.log(umaString.split('t')) // divide pelo caracter escolhido

console.log(umaString.toUpperCase()) // COLOCA TUDO EM MAIUSCULO
console.log(umaString.toLowerCase()) // coloca tudo em minusculo