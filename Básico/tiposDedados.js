/*   DADOS PRIMITIVOS

* String
* Number
* Undefined
* NUll
* Boolean

*/

const nome = 'Luan' // String
const nome2 = 'Luan' // String
const nome3 = 'Luan' // String

const num1 = 10 // number
const num2 = 10.52 // number

let nomeAluno // undefined -> não aponta pra local nenhuma na memória
let sobrenomeAluno = null // NUlo -> não ponta pra local nenhuma memória

const aprovado1 = true // Boolean
const aprovado2 = false // Boolean

// console.log(typeof nomeAluno, sobrenomeAluno)

const a = [1, 2]
const b = a

console.log(a, b)

b.push(3)
console.log(a, b)