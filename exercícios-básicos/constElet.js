const nome = 'Luan Portugal'
const sobreNome = 'Silva'
const idade = 19
const peso = 99
const altura = 1.75
let imc = peso / (altura * altura) // Peso / (altura * altura)
let anoAtual = 2020
let anoNascimento = anoAtual - idade

/* OPÇÃO 1 */
console.log(nome, sobreNome, 'tem', idade, 'pesa', peso, 'kg')
console.log('tem', altura, 'e seu IMC é de', imc)
console.log(nome, 'nasceu em', anoNascimento)

console.log('..........................................')
console.log('..........................................')
/* OPÇÃO 2 */

console.log(`${nome} ${sobreNome} 'tem' ${idade} 'pesa' ${peso} 'kg'
tem' ${altura} 'e seu IMC é de', ${imc}
${nome} 'nasceu em', ${anoNascimento}`)