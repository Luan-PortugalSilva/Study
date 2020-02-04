/*
Primitivos (imutáveis) - String, number, boolean, undefined, null (bigint, symbol)

            0123
let nome = 'Luan'
nome[0] = 'R'
console.log(nome[0]) 

let a = 'A'
let b = a  // Cópia
console.log(a, b)

a = 'Outra coisa'
console.log(a, b) */

/*
 Referência (mutável) - array, object, function - Passados por referencia


let a = [1, 2, 3] 
let b = a
console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b) */

const a = {
    nome: 'Luan',
    sobrenome: 'Portugal'
}

const b = {...a}

a.nome = 'João'
console.log(b)